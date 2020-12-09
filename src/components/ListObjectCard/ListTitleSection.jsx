import React from "react";

import { Typography, IconButton, makeStyles } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    display: "flex",
    flex: "1 1 0%",
    position: "relative",
  },
  lastEditedText: {
    fontSize: "0.75rem",
    fontWeight: "300",
    marginBottom: "2px",
  },
  contentTitle: {
    flex: "1 1 0%",
    marginRight: "16px",
    fontSize: "1.5rem",
  },
  settingsButton: {
    position: "absolute",
    right: "0",
    top: "0",
    padding: "0px 8px 0px 0px",
  },
}));

function ListTitleSection({ object }) {
  const classes = useStyles();
  return (
    <div className={classes.titleContainer}>
      <div style={{ display: "block" }}>
        <Typography className={classes.lastEditedText}>
          Last edited: {object.lastEdited}
        </Typography>
        <Typography className={classes.contentTitle}>{object.name}</Typography>
      </div>
      <IconButton
        className={classes.settingsButton}
        onClick={() => alert("settings clicked, to be implemented")}
      >
        <Settings fontSize="large" />
      </IconButton>
    </div>
  );
}

ListTitleSection.propTypes = {
  object: PropTypes.object.isRequired,
};

export default ListTitleSection;
