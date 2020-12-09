import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Divider,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { StarTwoTone, Star } from "@material-ui/icons";
import PropTypes from "prop-types";
import * as IMAGES_OBJECT from "../../images/objects";
import * as IMAGES_USERS from "../../images/users";
import mockUsers from "../../constants/mockUsers";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    padding: "12px 12px 12px 0px",
    margin: "6px 6px 6px 0px",
    boxShadow: "0px 0px 0px white",
    backgroundColor: "#fafafa",
  },
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
  contentTitleContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    height: "fit-content",
  },
  contentTitle: {
    flex: "1 1 0%",
    marginRight: "16px",
    fontSize: "1.3rem",
  },
  titleContainer: {
    display: "flex",
    flex: "1 1 0%",
  },
  ownerPhoto: {
    width: "25px",
    height: "25px",
    marginRight: "8px",
    position: "relative",
    borderRadius: "50%",
  },
  collaboratorPhoto: {
    width: "25px",
    height: "25px",
    position: "relative",
    borderRadius: "50%",
  },
  activeStar: {
    color: "#f2b01e",
  },
  avatarContainer: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  ownerContainer: {
    display: "flex",
    alignItems: "center",
    alignItems: "flex-end",
    paddingBottom: "4px",
  },
  collaboratorContainer: {
    display: "flex",
  },
  divider: {
    margin: "0px 32px 0px 0px",
  },
}));

function ListObjectCard({ object, toggleCardFavorite }) {
  const classes = useStyles({ uploadStatus: object.uploadStatus });
  return (
    <>
      <Card className={classes.card}>
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
        <CardContent className={classes.content}>
          <div className={classes.contentTitleContainer}>
            <div className={classes.titleContainer}>
              <div style={{ display: "block" }}>
                <Typography style={{ fontSize: "0.75rem", fontWeight: "300" }}>
                  Last edited: {object.lastEdited}
                </Typography>
                <Typography className={classes.contentTitle}>
                  {object.name}
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.avatarContainer}>
            <div className={classes.ownerContainer}>
              <CardMedia
                className={classes.ownerPhoto}
                title={object.ownerName}
                image={IMAGES_USERS[object.ownerName]}
              />
              <Typography style={{ fontWeight: "200", fontSize: "0.9rem" }}>
                {mockUsers[object.ownerName].name}
              </Typography>
            </div>
            <div className={classes.collaboratorContainer}>
              {object.collaborators.map((collaborator) => (
                <CardMedia
                  className={classes.collaboratorPhoto}
                  title={collaborator}
                  image={IMAGES_USERS[collaborator]}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <Divider className={classes.divider} />
    </>
  );
}

ListObjectCard.propTypes = {
  object: PropTypes.object.isRequired,
};

export default ListObjectCard;
