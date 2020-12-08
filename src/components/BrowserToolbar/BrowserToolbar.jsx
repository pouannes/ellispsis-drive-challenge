import React from "react";

import {
  makeStyles,
  Typography,
  FormControl,
  Select,
  MenuItem,
  IconButton,
} from "@material-ui/core";

import { ViewList, ViewModule } from "@material-ui/icons";

import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginBottom: "30px",
    maxWidth: "635px", // to be aligned with the filters button above in medium+ screens
  },
  results: {
    fontWeight: "600",
    marginRight: "20px",
  },
  sortBy: {
    fontSize: "0.8rem",
    verticalAlign: "bottom",
    lineHeight: "2",
    marginRight: "0.5em",
  },
  selectRoot: {
    padding: "3px 14px 3px 7px",
    fontSize: "0.8rem",
  },
  menuItemRoot: {
    fontSize: "0.8rem",
  },
  displayContainer: {
    marginLeft: "auto",
    display: "flex",
  },
  displayText: {
    marginRight: "0.5rem",
  },
  iconButtonRoot: {
    padding: "2px 4px",
    borderRadius: "3px",
    marginBottom: "4px",
  },
  selectedIconButton: {
    background: theme.palette.primary.light,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
  },
}));

function BrowserToolbar({
  resultNumber,
  sortBy,
  handleSortByChange,
  currentDisplay,
  setCurrentDisplay,
}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.results}>
        {resultNumber} results
      </Typography>
      <Typography className={classes.sortBy}>Sort by:</Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={sortBy}
          onChange={handleSortByChange}
          classes={{ root: `${classes.selectRoot}` }}
        >
          <MenuItem
            classes={{ root: `${classes.menuItemRoot}` }}
            value={"Last used"}
          >
            Last used
          </MenuItem>
          <MenuItem
            classes={{ root: `${classes.menuItemRoot}` }}
            value={"First used"}
          >
            First used
          </MenuItem>
          <MenuItem
            classes={{ root: `${classes.menuItemRoot}` }}
            value={"Decreasing size"}
          >
            Decreasing size
          </MenuItem>
          <MenuItem
            classes={{ root: `${classes.menuItemRoot}` }}
            value={"Increasing size"}
          >
            Increasing size
          </MenuItem>
        </Select>
      </FormControl>
      <div className={classes.displayContainer}>
        <Typography className={classes.displayText}>Display: </Typography>
        <IconButton
          color="primary"
          disableFocusRipple
          disableRipple
          classes={{
            root: `${classes.iconButtonRoot} ${
              currentDisplay === 0 ? classes.selectedIconButton : ""
            }`,
          }}
          onClick={() => setCurrentDisplay(0)}
        >
          <ViewList />
        </IconButton>
        <IconButton
          color="primary"
          disableFocusRipple
          disableRipple
          classes={{
            root: `${classes.iconButtonRoot} ${
              currentDisplay === 1 ? classes.selectedIconButton : ""
            }`,
          }}
          onClick={() => setCurrentDisplay(1)}
        >
          <ViewModule />
        </IconButton>
      </div>
    </div>
  );
}

BrowserToolbar.propTypes = {
  resultNumber: PropTypes.number.isRequired,
  sortBy: PropTypes.string.isRequired,
  handleSortByChange: PropTypes.func.isRequired,
  currentDisplay: PropTypes.number.isRequired,
  setCurrentDisplay: PropTypes.func.isRequired,
};

export default BrowserToolbar;
