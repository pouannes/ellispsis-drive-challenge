import React, { memo } from "react";

import { CardMedia, Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import clsx from "clsx";

import * as IMAGES_USERS from "../../images/users";
import mockUsers from "../../constants/mockUsers";

const useStyles = makeStyles((theme) => ({
  collaboratorContainer: {
    display: "flex",
    flexDirection: "column",
  },
  collaboratorText: {
    marginBottom: (props) => (props.variant === "miniature" ? "2px" : "6px"),
    fontWeight: "100",
    color: "rgb(96,96,96)",
    fontSize: "0.8rem",
    alignSelf: "flex-end",
    marginRight: "8px",
  },
  collaboratorPhotosContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  avatarPhoto: {
    width: "40px",
    height: "40px",
    position: "relative",
    borderRadius: "50%",
  },
  collaboratorPhoto: {
    marginRight: "8px",
  },
  moreCircle: {
    width: "40px",
    height: "40px",
    lineHeight: "40px",
    borderRadius: "50%",
    fontSize: "0.95rem",
    color: "black",
    backgroundColor: "lightGrey",
    textAlign: "center",
    background: "#000",
  },
}));

function CardCollaboratorContainer({ object, variant }) {
  const classes = useStyles({ variant });
  const maxDisplayedCollaborators = variant === "miniature" ? 2 : 5;
  return (
    <div className={classes.collaboratorContainer}>
      {object.collaborators.length > 0 ? (
        <>
          <Typography className={classes.collaboratorText}>
            Collaborator{object.collaborators.length === 1 ? "" : "s"}
          </Typography>
          <div className={classes.collaboratorPhotosContainer}>
            {object.collaborators
              .slice(0, maxDisplayedCollaborators - 1)
              .map((collaborator, i) => (
                <CardMedia
                  key={i}
                  className={clsx(
                    classes.avatarPhoto,
                    classes.collaboratorPhoto
                  )}
                  title={mockUsers[collaborator].name}
                  image={IMAGES_USERS[collaborator]}
                />
              ))}
            {object.collaborators.length > maxDisplayedCollaborators - 1 ? (
              <div className={classes.moreCircle}>
                +{object.collaborators.length - maxDisplayedCollaborators + 1}
              </div>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

CardCollaboratorContainer.propTypes = {
  object: PropTypes.object.isRequired,
  variant: PropTypes.string,
};

export default memo(CardCollaboratorContainer);
