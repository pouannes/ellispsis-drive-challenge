import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  tabsRoot: {
    paddingBottom: "10px",
    marginTop: "10px",
    marginBottom: "6px",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "0px",
    },
  },
  tabsIndicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.light,
    height: "4px",
  },
  tabsScroller: {
    display: "flex",
    alignItems: "center",
  },
  tab: {
    minWidth: 0,
    padding: "0",
    marginRight: "24px",
    marginLeft: "2px",
    lineHeight: "normal",
  },
  tabSelected: {
    fontWeight: 600,
  },
}));

function BrowserTabs({ tabValue, handleTabChange }) {
  const classes = useStyles();
  return (
    <>
      <Tabs
        value={tabValue}
        indicatorColor="primary"
        onChange={handleTabChange}
        classes={{
          root: `${classes.tabsRoot}`,
          indicator: `${classes.tabsIndicator}`,
          scroller: `${classes.tabsScroller}`,
        }}
        TabIndicatorProps={{ children: <span /> }}
      >
        <Tab
          classes={{
            root: `${classes.tab}`,
            selected: `${classes.tabSelected}`,
          }}
          label="Maps"
        />
        <Tab classes={{ root: `${classes.tab}` }} label="Shapes" />
      </Tabs>
    </>
  );
}

BrowserTabs.propTypes = {
  tabValue: PropTypes.number.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

export default BrowserTabs;
