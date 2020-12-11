import React, { memo } from "react";

import { Typography, IconButton, makeStyles } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import PropTypes from "prop-types";

const CUSTOM_BREAKPOINT_DELTA = "170";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    display: "flex",
    flex: "1 1 0%",
    position: "relative",
    marginTop: (props) => (props.variant === "miniature" ? "6px" : ""),
    [theme.breakpoints.down(
      theme.breakpoints.values.xs - CUSTOM_BREAKPOINT_DELTA
    )]: {
      marginBottom: "4px",
    },
  },
  lastEditedText: {
    fontSize: "0.75rem",
    fontWeight: "300",
    marginBottom: (props) => (props.variant === "miniature" ? "0px" : "2px"),
  },
  contentTitle: {
    flex: "1 1 0%",
    marginRight: (props) => (props.variant === "miniature" ? "0px" : "16px"),
    fontSize: (props) => (props.variant === "miniature" ? "1.35rem" : "1.5rem"),
    height: "32px",
    width: (props) => (props.variant === "miniature" ? "252px" : "400px"),
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  settingsButton: {
    position: "absolute",
    right: "0",
    top: "0",
    padding: "0px 8px 0px 0px",
  },
}));

function ListTitleSection({ object, setOpenSettings, variant }) {
  const classes = useStyles({ variant });
  return (
    <div className={classes.titleContainer}>
      <div style={{ display: "block" }}>
        <Typography className={classes.lastEditedText}>
          Last edited: {object.lastEdited}
        </Typography>
        <Typography className={classes.contentTitle}>{object.name}</Typography>
      </div>
      {variant === "miniature" ? (
        ""
      ) : (
        <IconButton
          className={classes.settingsButton}
          onClick={() => setOpenSettings()}
        >
          <Settings fontSize="large" />
        </IconButton>
      )}
    </div>
  );
}

ListTitleSection.propTypes = {
  object: PropTypes.object.isRequired,
  setOpenSettings: PropTypes.func,
  variant: PropTypes.string,
};

export default memo(ListTitleSection);
