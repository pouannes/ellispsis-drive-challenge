import React from "react";
import PropTypes from "prop-types";
import {
  CardMedia,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { StarTwoTone, Star } from "@material-ui/icons";

import * as IMAGES_OBJECT from "../../images/objects";

const useStyles = makeStyles((theme) => ({
  mediaContainer: {
    width: "300px",
    height: "200px",
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

function ObjectDisplay({ object, toggleCardFavorite }) {
  const classes = useStyles();
  return (
    <div className={classes.mediaContainer}>
      <CardMedia
        className={classes.objectMedia}
        title={object.name}
        image={IMAGES_OBJECT[object.imageName]}
      />
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
      <Typography className={classes.uploadText} variant="overline">
        Upload in progress
      </Typography>
    </div>
  );
}

ObjectDisplay.propTypes = {
  object: PropTypes.object.isRequired,
  toggleCardFavorite: PropTypes.func.isRequired,
};

export default ObjectDisplay;