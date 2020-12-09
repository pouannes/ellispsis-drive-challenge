import React, { useState, useEffect, useReducer } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { mockMaps, mockShapes } from "../../constants/mockObjects";

import Sidebar from "../Sidebar/Sidebar";
import BrowserTabs from "../BrowserTabs/BrowserTabs";
import Search from "../Search/Search";
import BrowserToolbar from "../BrowserToolbar/BrowserToolbar";
import ListCardBrowser from "../ListCardBrowser/ListCardBrowser";
import MiniatureCardBrowser from "../MiniatureCardBrowser/MiniatureCardBrowser";
import { Typography } from "@material-ui/core";
import Fuse from "fuse.js";

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

const initialFuseState = {
  fuseMaps: new Fuse(mockMaps, {
    keys: ["name", "ownerName", "collaborators"],
    includeScore: true,
  }),
  fuseShapes: new Fuse(mockShapes, {
    keys: ["name", "ownerName", "collaborators"],
    includeScore: true,
  }),
  searchResult: [],
};

function fuseReducer(state, action) {
  switch (action.type) {
    case "updateFuseMaps":
      state.fuseMaps.setCollection(action.payload);
      return { ...state };
    case "updateFuseShapes":
      state.fuseShapes.setCollection(action.payload);
      return { ...state };
    case "updateMapsSearch":
      return {
        ...state,
        searchResult: state.fuseMaps
          .search(action.payload)
          .map((res) => res.item),
      };
    case "updateShapesSearch":
      return {
        ...state,
        searchResult: state.fuseShapes
          .search(action.payload)
          .map((res) => res.item),
      };
    case "resetSearchResult":
      return {
        ...state,
        searchResult: action.payload,
      };
    default:
      throw new Error();
  }
}

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
  const [searchResults, dispatch] = useReducer(fuseReducer, initialFuseState);

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  // reset search bar on tab change
  useEffect(() => {
    setSearchValue("");
  }, [tabValue]);
  // update fuse search if array change
  useEffect(() => {
    dispatch({ type: "updateFuseMaps", payload: liveMockMaps });
  }, [liveMockMaps]);
  useEffect(() => {
    dispatch({ type: "updateFuseShapes", payload: liveMockShapes });
  }, [liveMockShapes]);

  // search on search input
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
    }
  }, [searchValue, tabValue, liveMockMaps, liveMockShapes]);

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
