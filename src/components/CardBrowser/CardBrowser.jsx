import React from "react";

import ObjectCard from "../ObjectCard/ObjectCard";

function CardBrowser({ cards }) {
  return (
    <div>
      {Object.keys(cards).map((card, i) => (
        <ObjectCard object={cards[card]} key={i} />
      ))}
    </div>
  );
}

export default CardBrowser;
