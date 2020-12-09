import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { mockMaps, mockShapes } from "../../constants/mockObjects";

import Sidebar from "../Sidebar/Sidebar";
import BrowserTabs from "../BrowserTabs/BrowserTabs";
import Search from "../Search/Search";
import BrowserToolbar from "../BrowserToolbar/BrowserToolbar";
import ListCardBrowser from "../ListCardBrowser/ListCardBrowser";
import MiniatureCardBrowser from "../MiniatureCardBrowser/MiniatureCardBrowser";
import { Typography } from "@material-ui/core";

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
  // 0 for 'Last used', 1 for 'First used',
  // 2 for 'Decreasing size', 3 for 'Increasing size'
  const [sortBy, setSortBy] = useState(0);
  // 0 for list display, 1 for miniature display
  const [currentDisplay, setCurrentDisplay] = useState(0);

  const [liveMockMaps, setLiveMockMaps] = useState(mockMaps);
  const [liveMockShapes, setLiveMockShapes] = useState(mockShapes);

  const cards = tabValue === 0 ? liveMockMaps : liveMockShapes;

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const toggleCardFavorite = (card, cardName, type) => {
    if (type === "map") {
      let newMaps = { ...liveMockMaps };
      newMaps[cardName].favorite = !card.favorite;
      setLiveMockMaps(newMaps);
    } else {
      let newShapes = { ...liveMockShapes };
      newShapes[cardName].favorite = !card.favorite;
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
        <Search />
        <BrowserToolbar
          resultNumber={Object.keys(cards).length}
          sortBy={sortBy}
          handleSortByChange={handleSortByChange}
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
        />
        {currentDisplay === 0 ? (
          <ListCardBrowser
            cards={cards}
            toggleCardFavorite={toggleCardFavorite}
          />
        ) : (
          <MiniatureCardBrowser
            cards={cards}
            toggleCardFavorite={toggleCardFavorite}
          />
        )}
      </div>
    </div>
  );
}

export default Overview;
