import React, { memo } from "react";

import { CardMedia, Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import clsx from "clsx";

import * as IMAGES_USERS from "../../images/users";
import mockUsers from "../../constants/mockUsers";

const useStyles = makeStyles((theme) => ({
  ownerContainer: {
    display: "flex",
    flexDirection: "column",
  },
  ownerText: {
    marginBottom: (props) => (props.variant === "miniature" ? "2px" : "6px"),
    fontWeight: "100",
    color: "rgb(96,96,96)",
    fontSize: "0.8rem",
    alignSelf: "flex-start",
    marginRight: "8px",
  },
  ownerFirstName: {
    fontSize: (props) => (props.variant === "miniature" ? "0.95rem" : "1rem"),
    flexGrow: "1",
    fontWeight: "200",
  },
  ownerLastName: {
    fontWeight: "200",
    fontSize: (props) => (props.variant === "miniature" ? "0.95rem" : "1rem"),
    lineHeight: "1",
  },
  ownerContentContainer: {
    display: "flex",
    alignItems: "flex-end",
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
  ownerTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "40px",
  },
}));

function CardOwnerSection({ object, variant }) {
  const classes = useStyles({ variant });
  return (
    <div className={classes.ownerContainer}>
      <Typography className={classes.ownerText}>Owner</Typography>
      <div className={classes.ownerContentContainer}>
        <CardMedia
          className={clsx(classes.avatarPhoto, classes.ownerPhoto)}
          title={mockUsers[object.ownerName].name}
          image={IMAGES_USERS[object.ownerName]}
        />
        <div className={classes.ownerTextContainer}>
          <Typography className={classes.ownerFirstName}>
            {mockUsers[object.ownerName].firstName}
          </Typography>
          <Typography className={classes.ownerLastName}>
            {mockUsers[object.ownerName].lastName}
          </Typography>
        </div>
      </div>
    </div>
  );
}

CardOwnerSection.propTypes = {
  object: PropTypes.object.isRequired,
  variant: PropTypes.string,
};

export default memo(CardOwnerSection);
