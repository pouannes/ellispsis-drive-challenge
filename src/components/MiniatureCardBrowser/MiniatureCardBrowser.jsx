import React from "react";
import PropTypes from "prop-types";

import MiniatureObjectCard from "../MiniatureObjectCard/MiniatureObjectCard";

function MiniatureCardBrowser({ cards, toggleCardFavorite }) {
  return (
    <div>
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
