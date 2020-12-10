import React, { memo } from "react";

import { Card, CardContent, Divider, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import ObjectDisplay from "../ObjectDisplay/ObjectDisplay";
import CardOwnerSection from "../CardOwnerSection/CardOwnerSection";
import CardCollaboratorContainer from "../CardCollaboratorContainer/CardCollaboratorContainer";
import ListTitleSection from "./ListTitleSection";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    padding: "12px 12px 12px 0px",
    margin: "6px 6px 6px 0px",
    boxShadow: "0px 0px 0px white",
    backgroundColor: "#fafafa",
  },
  content: {
    padding: 0,
    paddingBottom: "4px !important",
    marginLeft: "16px",
    width: "calc(100% - 324px)",
    display: "flex",
    flexDirection: "column",
  },
  contentTitleContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    height: "fit-content",
  },

  avatarContainer: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
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
        <ObjectDisplay
          object={object}
          toggleCardFavorite={toggleCardFavorite}
          version="list"
        />
        <CardContent className={classes.content}>
          <div className={classes.contentTitleContainer}>
            <ListTitleSection object={object} />
          </div>
          <div className={classes.avatarContainer}>
            <CardOwnerSection object={object} />
            <CardCollaboratorContainer object={object} />
          </div>
        </CardContent>
      </Card>
      <Divider className={classes.divider} />
    </>
  );
}

ListObjectCard.propTypes = {
  object: PropTypes.object.isRequired,
  toggleCardFavorite: PropTypes.func.isRequired,
};

export default memo(ListObjectCard);
