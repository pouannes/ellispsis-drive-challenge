import React from "react";

import {
  Paper,
  Backdrop,
  makeStyles,
  Typography,
  ClickAwayListener,
} from "@material-ui/core";

import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  settingsContainer: {
    width: "40%",
    minHeight: "400px",
    display: "grid",
    gridTemplateColumns: "1fr 220px",
    borderRadius: "8px",
    padding: "20px",
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
  },
}));

// openSettings is an object with 3 fields:
// - open (bool)
// - cardIndex (int) used to find the object in the list
function Settings({ openSettings, setOpenSettings, cards }) {
  const classes = useStyles();

  const handleClose = () => {
    setOpenSettings({ ...openSettings, open: false });
  };

  const card = cards[openSettings.cardIndex];

  return (
    <Backdrop className={classes.backdrop} open={openSettings.open}>
      {openSettings.open ? (
        <ClickAwayListener onClickAway={handleClose}>
          <Paper className={classes.settingsContainer} elevation={3}>
            <div className={classes.title}>
              <Typography variant="h5">
                Settings of {card.name} {card.type}
              </Typography>{" "}
            </div>
          </Paper>
        </ClickAwayListener>
      ) : (
        ""
      )}
    </Backdrop>
  );
}

Settings.propTypes = {
  openSettings: PropTypes.object.isRequired,
  setOpenSettings: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired,
};

export default Settings;
