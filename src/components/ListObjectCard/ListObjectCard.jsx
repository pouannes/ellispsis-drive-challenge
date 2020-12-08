import React from "react";

function ListObjectCard({ object }) {
  return (
    <div>
      <p>
        I'm the object {object.name} of type {object.type} displayed in a list
      </p>
    </div>
  );
}

export default ListObjectCard;
