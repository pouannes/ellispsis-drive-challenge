import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { mockMaps, mockShapes } from "../../constants/mockObjects";

import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";
import ObjectCard from "../ObjectCard/ObjectCard";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    top: "64px",
    left: "0",
    width: "100vw",
    maxWidth: "1800px",
    display: "grid",
    gridTemplateColumns: "172px 1fr 172px",
    gridGap: "32px",
  },
  sidebarContainer: {
    gridColumn: 1,
    position: "sticky",
    top: 0,
    paddingTop: "24px",
    height: "calc(100vh - 64px)",
  },
  browserContainer: {
    gridColumn: 2,
    height: "100%",
  },
}));

function Overview() {
  const classes = useStyles();

  const [currentFolder, setCurrentFolder] = useState(0);

  return (
    <div className={classes.container}>
      <nav className={classes.sidebarContainer}>
        <Sidebar
          currentFolder={currentFolder}
          setCurrentFolder={setCurrentFolder}
        />
      </nav>
      <div className={classes.browserContainer}>
        <Search />
        {Object.keys(mockMaps).map((map, i) => (
          <ObjectCard object={mockMaps[map]} key={i} />
        ))}
        {Object.keys(mockShapes).map((shape, i) => (
          <ObjectCard object={mockShapes[shape]} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Overview;
