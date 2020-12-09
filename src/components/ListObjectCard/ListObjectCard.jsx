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
import clsx from "clsx";
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
    fontSize: "1.5rem",
  },
  titleContainer: {
    display: "flex",
    flex: "1 1 0%",
  },
  ownerTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "40px",
  },
  avatarPhoto: {
    width: "40px",
    height: "40px",
    position: "relative",
    borderRadius: "50%",
  },
  ownerPhoto: {
    marginRight: "8px",
  },
  collaboratorPhoto: {
    marginRight: "8px",
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
    height: "44px",
  },
  collaboratorContainer: {
    display: "flex",
    flexDirection: "column",
  },
  collaboratorPhotosContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  divider: {
    margin: "0px 32px 0px 0px",
  },
}));

function ListObjectCard({ object, toggleCardFavorite }) {
  const classes = useStyles({ uploadStatus: object.uploadStatus });
  console.log(object);
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
                <Typography
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "300",
                    marginBottom: "2px",
                  }}
                >
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
                className={clsx(classes.avatarPhoto, classes.ownerPhoto)}
                title={object.ownerName}
                image={IMAGES_USERS[object.ownerName]}
              />
              <div className={classes.ownerTextContainer}>
                <Typography
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "100",
                    flexGrow: "1",
                    color: "rgb(96,96,96)",
                  }}
                >
                  Owner
                </Typography>
                <Typography
                  style={{
                    fontWeight: "200",
                    fontSize: "1.3rem",
                    lineHeight: "1",
                  }}
                >
                  {mockUsers[object.ownerName].name}
                </Typography>
              </div>
            </div>
            <div className={classes.collaboratorContainer}>
              {object.collaborators.length > 0 ? (
                <>
                  <Typography
                    style={{
                      marginBottom: "6px",
                      fontWeight: "100",
                      color: "rgb(96,96,96)",
                      fontSize: "0.8rem",
                      alignSelf: "flex-end",
                      marginRight: "8px",
                    }}
                  >
                    Collaborator{object.collaborators.length === 1 ? "" : "s"}
                  </Typography>
                  <div className={classes.collaboratorPhotosContainer}>
                    {object.collaborators.slice(0, 5).map((collaborator, i) => (
                      <CardMedia
                        key={i}
                        className={clsx(
                          classes.avatarPhoto,
                          classes.collaboratorPhoto
                        )}
                        title={collaborator}
                        image={IMAGES_USERS[collaborator]}
                      />
                    ))}
                  </div>{" "}
                </>
              ) : (
                ""
              )}
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
