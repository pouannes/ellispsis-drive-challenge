import React, { memo } from "react";

import { Card, CardContent, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import ObjectDisplay from "../ObjectDisplay/ObjectDisplay";
import CardOwnerSection from "../CardOwnerSection/CardOwnerSection";
import CardCollaboratorContainer from "../CardCollaboratorContainer/CardCollaboratorContainer";
import ListTitleSection from "../ListObjectCard/ListTitleSection";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    width: "252px",
    padding: "12px 0px 12px 0px",
    marginBottom: "6px",
    boxShadow: "0px 0px 0px white",
    backgroundColor: "#fafafa",
  },
  content: {
    padding: 0,
    paddingBottom: "4px !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  contentTitleContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    height: "fit-content",
    marginBottom: "6px",
  },

  avatarContainer: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
}));

function MiniatureObjectCard({ object, toggleCardFavorite }) {
  const classes = useStyles({ uploadStatus: object.uploadStatus });
  return (
    <>
      <Card className={classes.card}>
        <ObjectDisplay
          object={object}
          toggleCardFavorite={toggleCardFavorite}
          variant="miniature"
        />
        <CardContent className={classes.content}>
          <div className={classes.contentTitleContainer}>
            <ListTitleSection object={object} variant="miniature" />
          </div>
          <div className={classes.avatarContainer}>
            <CardOwnerSection object={object} variant="miniature" />
            <CardCollaboratorContainer object={object} variant="miniature" />
          </div>
        </CardContent>
      </Card>
    </>
  );
}

MiniatureObjectCard.propTypes = {
  object: PropTypes.object.isRequired,
  toggleCardFavorite: PropTypes.func.isRequired,
};

export default memo(MiniatureObjectCard);
