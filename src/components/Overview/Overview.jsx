import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { mockMaps, mockShapes } from "../../constants/mockObjects";

import Sidebar from "../Sidebar/Sidebar";
import BrowserTabs from "../BrowserTabs/BrowserTabs";
import Search from "../Search/Search";
import BrowserToolbar from "../BrowserToolbar/BrowserToolbar";
import ListCardBrowser from "../ListCardBrowser/ListCardBrowser";
import MiniatureCardBrowser from "../MiniatureCardBrowser/MiniatureCardBrowser";
import useResultReducer from "../../hooks/useResultReducer";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    top: "64px",
    left: "0",
    width: "100vw",
    maxWidth: "1800px",
    marginLeft: "calc((100% - min(100vw, 1800px)) / 2)",
    justifyItems: "center",
    justifyContent: "space-between",
    display: "grid",
    // ok for normal, side cells need to be bigger for large/v. large screens
    gridTemplateColumns: "172px 1fr 172px",
    gridGap: "32px",
  },
  sidebarContainer: {
    gridColumn: 1,
    position: "sticky",
    top: 0,
    paddingTop: "34px",
    height: "calc(100vh - 64px)",
  },
  browserContainer: {
    gridColumn: 2,
    height: "100%",
    width: "100%",
    // ok for normal, maybe need to be bigger for large/v. large screens
    maxWidth: "840px",
    paddingTop: "34px",
  },
  browserTitle: {
    paddingLeft: "16px",
  },
}));

function Overview() {
  const classes = useStyles();

  // 0 for my 'projects', 1 for 'shared with me', 2 for 'favorites'
  const [currentFolder, setCurrentFolder] = useState(0);
  // 0 for 'maps', 1 for 'shapes'
  const [tabValue, setTabValue] = useState(0);
  // 0 for 'Last edited', 1 for 'First edited',
  // 2 for 'Decreasing size', 3 for 'Increasing size'
  const [sortBy, setSortBy] = useState(0);
  // 0 for list display, 1 for miniature display
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  // clone of mockMaps/Shapes, to be able to freely modify them
  const [liveMockMaps, setLiveMockMaps] = useState(mockMaps);
  const [liveMockShapes, setLiveMockShapes] = useState(mockShapes);
  // handle search with Fuse
  const [searchResults, dispatch] = useResultReducer();

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  // TODO: there's some pretty big redundancy in the following 4 `useEffect`s
  // I can probably combine them into one useReducer for better design
  // and optimization

  // reset search bar on tab change
  useEffect(() => {
    setSearchValue("");
  }, [tabValue]);

  // update fuse search if array change
  useEffect(() => {
    dispatch({ type: "updateFuseMaps", payload: liveMockMaps });
  }, [liveMockMaps, dispatch]);
  useEffect(() => {
    dispatch({ type: "updateFuseShapes", payload: liveMockShapes });
  }, [liveMockShapes, dispatch]);

  // Switch folders
  useEffect(() => {
    if (currentFolder === 0) {
      dispatch({
        type: "resetSearchResult",
        payload: tabValue === 0 ? liveMockMaps : liveMockShapes,
      });
      if (searchValue.length > 0) {
        dispatch(
          tabValue === 0
            ? { type: "updateMapsSearch", payload: searchValue }
            : { type: "updateShapesSearch", payload: searchValue }
        );
      }
    } else if (currentFolder === 2) {
      dispatch({ type: "filterFavorites" });
    }
  }, [
    currentFolder,
    tabValue,
    searchValue,
    liveMockShapes,
    liveMockMaps,
    dispatch,
  ]);

  // search on search change
  useEffect(() => {
    if (searchValue.length > 0) {
      if (tabValue === 0) {
        dispatch({ type: "updateMapsSearch", payload: searchValue });
      } else {
        dispatch({ type: "updateShapesSearch", payload: searchValue });
      }
    } else {
      dispatch({
        type: "resetSearchResult",
        payload: tabValue === 0 ? liveMockMaps : liveMockShapes,
      });
      if (currentFolder === 2) {
        dispatch({ type: "filterFavorites" });
      }
    }
  }, [
    searchValue,
    tabValue,
    currentFolder,
    liveMockMaps,
    liveMockShapes,
    dispatch,
  ]);

  const toggleCardFavorite = (cardName, type) => {
    if (type === "map") {
      let newMaps = [...liveMockMaps];
      newMaps = newMaps.map((map) =>
        map.name === cardName ? { ...map, favorite: !map.favorite } : map
      );
      setLiveMockMaps(newMaps);
    } else {
      let newShapes = [...liveMockShapes];
      newShapes = newShapes.map((shape) =>
        shape.name === cardName
          ? { ...shape, favorite: !shape.favorite }
          : shape
      );
      setLiveMockShapes(newShapes);
    }
  };

  return (
    <div className={classes.container}>
      <nav className={classes.sidebarContainer}>
        <Sidebar
          currentFolder={currentFolder}
          setCurrentFolder={setCurrentFolder}
        />
      </nav>
      <div className={classes.browserContainer}>
        <div className={classes.browserTitle}>
          <Typography variant="h4">Overview</Typography>
          <BrowserTabs tabValue={tabValue} handleTabChange={handleTabChange} />
        </div>
        <Search
          searchValue={searchValue}
          handleSearchValueChange={handleSearchValueChange}
          tabValue={tabValue}
        />
        <BrowserToolbar
          resultNumber={Object.keys(searchResults.searchResult).length}
          sortBy={sortBy}
          handleSortByChange={handleSortByChange}
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
        />
        {currentDisplay === 0 ? (
          <ListCardBrowser
            cards={searchResults.searchResult}
            toggleCardFavorite={toggleCardFavorite}
          />
        ) : (
          <MiniatureCardBrowser
            cards={searchResults.searchResult}
            toggleCardFavorite={toggleCardFavorite}
          />
        )}
      </div>
    </div>
  );
}

export default Overview;
