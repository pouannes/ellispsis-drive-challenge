import React, { memo } from "react";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import FolderSharedOutlinedIcon from "@material-ui/icons/FolderSharedOutlined";
import FolderSpecialOutlinedIcon from "@material-ui/icons/FolderSpecialOutlined";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, useTheme, Typography } from "@material-ui/core";
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
    color: (props) => (props.selected ? theme.palette.common.white : ""),
    backgroundColor: (props) =>
      props.selected ? theme.palette.primary.light : "",
  },
  iconButton: {
    backgroundColor: "transparent",
    padding: "4px 12px",
  },
}));

const IconLink = memo(({ Icon, name, selected, changeFolder }) => {
  const classes = useIconStyles({ selected });
  const theme = useTheme();
  return (
    <div className={classes.container} onClick={changeFolder}>
      <IconButton
        disableRipple
        disableFocusRipple
        classes={{ root: `${classes.iconButton}` }}
      >
        <Icon
          style={{ color: selected ? theme.palette.common.white : "" }}
          fontSize="large"
        />
      </IconButton>
      <Typography
        style={{ fontSize: "0.8rem", fontWeight: selected ? "600" : "400" }}
        variant="body2"
      >
        {name}
      </Typography>
    </div>
  );
});

IconLink.propTypes = {
  Icon: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  changeFolder: PropTypes.func.isRequired,
};

export default memo(Sidebar);
