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
import { StarBorderOutlined, Star } from "@material-ui/icons";
import PropTypes from "prop-types";
import * as IMAGES from "../../images";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    padding: "12px 12px 12px 0px",
    margin: "6px 6px 6px 0px",
    boxShadow: "0px 0px 0px white",
    backgroundColor: "#fafafa",
  },
  media: {
    width: "300px",
    height: "200px",
    margin: "8px 8px 8px 0px",
    borderRadius: "8px",
  },
  content: {
    padding: 0,
    marginLeft: "16px",
    width: "calc(100% - 324px)",
  },
  contentTitleContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
  },
  contentTitle: {
    flex: "1 1 0%",
    marginRight: "16px",
  },
  contentTitleIcon: {
    position: "relative",
    padding: 0,
  },
  activeStar: {
    color: "#f2b01e",
  },
  divider: {
    margin: "0px 32px 0px 0px",
  },
}));

function ListObjectCard({ object, toggleCardFavorite }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          title={object.name}
          image={IMAGES[object.imageName]}
        />
        <CardContent className={classes.content}>
          <div className={classes.contentTitleContainer}>
            <Typography className={classes.contentTitle}>
              I'm the object {object.name} of type {object.type} displayed in a
              list
            </Typography>
            <IconButton
              className={classes.contentTitleIcon}
              onClick={() => toggleCardFavorite()}
            >
              {object.favorite ? (
                <Star fontSize="large" className={classes.activeStar} />
              ) : (
                <StarBorderOutlined fontSize="large" />
              )}
            </IconButton>
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
