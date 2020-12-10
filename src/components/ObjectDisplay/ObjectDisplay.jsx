import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  CardMedia,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { StarTwoTone, Star, Settings } from "@material-ui/icons";

import * as IMAGES_OBJECT from "../../images/objects";

const CUSTOM_BREAKPOINT_DELTA = 170;

const useStyles = makeStyles((theme) => ({
  mediaContainer: {
    [theme.breakpoints.down(
      theme.breakpoints.values.xs - CUSTOM_BREAKPOINT_DELTA
    )]: {
      width: "100% !important",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
    },
    width: "252px",
    height: "168px",
    marginRight: "8px",
    position: "relative",
  },
  objectMedia: {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    filter: (props) =>
      props.uploadStatus === "Uploading" ? "opacity(0.5) grayscale(1)" : "",
  },
  activeStar: {
    color: "#f2b01e",
  },
  content: {
    padding: 0,
    paddingBottom: "4px !important",
    marginLeft: "16px",
    width: "calc(100% - 324px)",
    display: "flex",
    flexDirection: "column",
  },
  favoriteIconButton: {
    position: "absolute",
    top: "0",
    right: "0",
    padding: 0,
    marginTop: "5px",
    marginRight: "5px",
  },
  settingsIconButton: {
    position: "absolute",
    top: "0",
    left: "0",
    padding: 0,
    marginTop: "5px",
    marginLeft: "5px",
    color: "rgba(0, 0, 0, 0.6)",
  },
  settingsIcon: {
    "& path": {
      stroke: "#aaa",
      strokeWidth: "0.8px",
      strokeLinejoin: "round",
    },
  },
  iconSVG: {
    "& path": {
      "&:nth-child(1)": {
        fill: "rgba(190, 190, 190)",
        opacity: "0.8",
      },
      "&:nth-child(2)": {
        fill: "rgba(0, 0, 0, 0.65)",
      },
    },
  },
  uploadText: {
    position: "absolute",
    width: "fit-content",
    visibility: (props) => (props.uploadStatus === "Uploading" ? "" : "hidden"),
    color: "rgb(80,80,80)",
    fontSize: "1.2rem",
    fontWeight: "600",
    top:
      "50%" /* position the top  edge of the element at the middle of the parent */,
    left:
      "50%" /* position the left edge of the element at the middle of the parent */,

    transform: "translate(-50%, -50%)",
  },
}));

const StarIcons = memo(({ object, toggleCardFavorite }) => {
  const classes = useStyles();
  return (
    <IconButton
      className={classes.favoriteIconButton}
      onClick={() => toggleCardFavorite()}
    >
      {object.favorite ? (
        <Star fontSize="large" className={classes.activeStar} />
      ) : (
        <StarTwoTone
          fontSize="large"
          classes={{ root: `${classes.iconSVG}` }}
        />
      )}
    </IconButton>
  );
});

function ObjectDisplay({ object, toggleCardFavorite, variant }) {
  const classes = useStyles({ uploadStatus: object.uploadStatus });
  return (
    <div className={classes.mediaContainer}>
      <CardMedia
        className={classes.objectMedia}
        title={object.name}
        image={IMAGES_OBJECT[object.imageName]}
      />
      <StarIcons object={object} toggleCardFavorite={toggleCardFavorite} />
      {variant === "miniature" ? (
        <IconButton
          className={classes.settingsIconButton}
          onClick={() => alert("settings still to be implemented!")}
        >
          <Settings fontSize="large" className={classes.settingsIcon} />
        </IconButton>
      ) : (
        ""
      )}

      <Typography className={classes.uploadText} variant="overline">
        Upload in progress
      </Typography>
    </div>
  );
}

ObjectDisplay.propTypes = {
  object: PropTypes.object.isRequired,
  toggleCardFavorite: PropTypes.func.isRequired,
  variant: PropTypes.string,
};

export default memo(ObjectDisplay);
