import React from "react";
import PropTypes from "prop-types";

import MiniatureObjectCard from "../MiniatureObjectCard/MiniatureObjectCard";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "space-between",
    display: "grid",
    [theme.breakpoints.up("xs")]: {
      gridTemplateColumns: "1fr 1fr",
      "& div": {
        "&:nth-child(2n + 1)": {
          justifySelf: "start",
        },
        "&:nth-child(2n)": {
          justifySelf: "end",
        },
      },
    },
    [theme.breakpoints.up("sm")]: {
      paddingRight: "26px",
      gridTemplateColumns: "1fr 1fr",
      "& div": {
        "&:nth-child(2n + 1)": {
          justifySelf: "start",
        },
        "&:nth-child(2n)": {
          justifySelf: "end",
        },
      },
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
      "& div": {
        "&:nth-child(3n + 1)": {
          justifySelf: "start",
        },
        "&:nth-child(3n + 2)": {
          justifySelf: "center",
        },
        "&:nth-child(3n)": {
          justifySelf: "end",
        },
      },
    },
  },
}));

function MiniatureCardBrowser({ cards, toggleCardFavorite }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {cards.map((card, i) => (
        <MiniatureObjectCard
          object={card}
          key={i}
          toggleCardFavorite={() => toggleCardFavorite(card.name, card.type)}
        />
      ))}
    </div>
  );
}

MiniatureCardBrowser.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleCardFavorite: PropTypes.func.isRequired,
};

export default MiniatureCardBrowser;
