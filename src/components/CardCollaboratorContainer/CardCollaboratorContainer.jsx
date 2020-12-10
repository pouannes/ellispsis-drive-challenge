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
    marginBottom: "6px",
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
}));

function CardCollaboratorContainer({ object }) {
  const classes = useStyles();
  return (
    <div className={classes.collaboratorContainer}>
      {object.collaborators.length > 0 ? (
        <>
          <Typography className={classes.collaboratorText}>
            Collaborator{object.collaborators.length === 1 ? "" : "s"}
          </Typography>
          <div className={classes.collaboratorPhotosContainer}>
            {object.collaborators.slice(0, 5).map((collaborator, i) => (
              <CardMedia
                key={i}
                className={clsx(classes.avatarPhoto, classes.collaboratorPhoto)}
                title={mockUsers[collaborator].name}
                image={IMAGES_USERS[collaborator]}
              />
            ))}
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
};

export default memo(CardCollaboratorContainer);
