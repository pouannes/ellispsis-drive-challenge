import React from "react";

function MiniatureObjectCard({ object }) {
  return (
    <div>
      <p>
        I'm the object {object.name} of type {object.type} displayed in a
        miniature
      </p>
    </div>
  );
}

export default MiniatureObjectCard;
