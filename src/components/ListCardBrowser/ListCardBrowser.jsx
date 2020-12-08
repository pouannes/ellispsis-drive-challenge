import React from "react";

import ListObjectCard from "../ListObjectCard/ListObjectCard";

function ListCardBrowser({ cards }) {
  return (
    <div>
      <p>List Card Browser</p>
      {Object.keys(cards).map((card, i) => (
        <ListObjectCard object={cards[card]} key={i} />
      ))}
    </div>
  );
}

export default ListCardBrowser;
