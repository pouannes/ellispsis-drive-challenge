import React from "react";

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
    display: "grid",
    gridTemplateColumns: "96px 1fr 96px",
    gridGap: "32px",
  },
  sidebarContainer: {
    gridColumn: 1,
    position: "sticky",
    top: 0,
    height: "calc(100vh - 64px)",
    backgroundColor: "grey",
  },
  browserContainer: {
    gridColumn: 2,
    height: "100%",
  },
}));

function Overview() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <nav className={classes.sidebarContainer}>
        <Sidebar />
      </nav>
      <div className={classes.browserContainer}>
        <Search />
        {Object.keys(mockMaps).map((map, i) => (
          <ObjectCard object={mockMaps[map]} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Overview;
