import React from "react";

import MiniatureObjectCard from "../MiniatureObjectCard/MiniatureObjectCard";

function MiniatureCardBrowser({ cards }) {
  return (
    <div>
      {Object.keys(cards).map((card, i) => (
        <MiniatureObjectCard object={cards[card]} key={i} />
      ))}
    </div>
  );
}

export default MiniatureCardBrowser;
