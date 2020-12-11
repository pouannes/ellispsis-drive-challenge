import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
    padding: "12px",
  },
});

function FiltersDrawer({ open, setOpen }) {
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const list = (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography>Hey there!</Typography>
      <Typography>
        You could put filters here, to sort through the objects
      </Typography>
    </div>
  );

  return (
    <div>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
}

FiltersDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default FiltersDrawer;
