import React from "react";

import ListObjectCard from "../ListObjectCard/ListObjectCard";

function ListCardBrowser({ cards, toggleCardFavorite }) {
  return (
    <div>
      {Object.keys(cards).map((card, i) => (
        <ListObjectCard
          object={cards[card]}
          key={i}
          toggleCardFavorite={() =>
            toggleCardFavorite(cards[card], card, cards[card].type)
          }
        />
      ))}
    </div>
  );
}

export default ListCardBrowser;
