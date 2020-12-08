import React from "react";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import FolderSharedOutlinedIcon from "@material-ui/icons/FolderSharedOutlined";
import FolderSpecialOutlinedIcon from "@material-ui/icons/FolderSpecialOutlined";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

function Sidebar({ currentFolder, setCurrentFolder }) {
  return (
    <>
      <IconLink
        Icon={FolderOpenOutlinedIcon}
        name="My Projects"
        selected={currentFolder === 0}
        changeFolder={() => setCurrentFolder(0)}
      />
      <IconLink
        Icon={FolderSharedOutlinedIcon}
        name="Shared with me"
        selected={currentFolder === 1}
        changeFolder={() => setCurrentFolder(1)}
      />
      <IconLink
        Icon={FolderSpecialOutlinedIcon}
        name="Favorites"
        selected={currentFolder === 2}
        changeFolder={() => setCurrentFolder(2)}
      />
    </>
  );
}

Sidebar.propTypes = {
  currentFolder: PropTypes.number.isRequired,
  setCurrentFolder: PropTypes.func.isRequired,
};

const useIconStyles = makeStyles((theme) => ({
  container: {
    padding: "8px 16px 14px 16px",
    margin: "4px",
    maxWidth: "138px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    borderRadius: "8px",
    cursor: "pointer",
    color: (props) => (props.selected ? "white" : ""),
    backgroundColor: (props) => (props.selected ? "#69b2c7" : ""),
  },
  iconButton: {
    backgroundColor: "transparent",
    padding: "4px 12px",
  },
}));

function IconLink({ Icon, name, selected, changeFolder }) {
  const classes = useIconStyles({ selected });
  console.log(selected);
  return (
    <div className={classes.container} onClick={changeFolder}>
      <IconButton
        disableRipple
        disableFocusRipple
        classes={{ root: `${classes.iconButton}` }}
      >
        <Icon style={{ color: selected ? "white" : "" }} fontSize="large" />
      </IconButton>
      <Typography
        style={{ fontSize: "0.8rem", fontWeight: selected ? "600" : "400" }}
        variant="body2"
      >
        {name}
      </Typography>
    </div>
  );
}

IconLink.propTypes = {
  Icon: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Sidebar;
