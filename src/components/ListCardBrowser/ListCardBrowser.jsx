import React from "react";
import PropTypes from "prop-types";

import ListObjectCard from "../ListObjectCard/ListObjectCard";

function ListCardBrowser({ cards, toggleCardFavorite, setOpenSettings }) {
  return (
    <div>
      {cards.map((card, i) => (
        <ListObjectCard
          object={card}
          key={i}
          toggleCardFavorite={() => toggleCardFavorite(card.name, card.type)}
          setOpenSettings={() => setOpenSettings({ open: true, cardIndex: i })}
        />
      ))}
    </div>
  );
}

ListCardBrowser.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleCardFavorite: PropTypes.func.isRequired,
  setOpenSettings: PropTypes.func.isRequired,
};

export default ListCardBrowser;
