import React from "react";

import MiniatureObjectCard from "../MiniatureObjectCard/MiniatureObjectCard";

function MiniatureCardBrowser({ cards }) {
  return (
    <div>
      <p>Miniature Card Browser</p>
      {Object.keys(cards).map((card, i) => (
        <MiniatureObjectCard object={cards[card]} key={i} />
      ))}
    </div>
  );
}

export default MiniatureCardBrowser;
