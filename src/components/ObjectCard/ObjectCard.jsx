import React from "react";

function ObjectCard({ object }) {
  console.log(object);
  return (
    <div>
      <p>
        I'm the object {object.name} of type {object.type}
      </p>
    </div>
  );
}

export default ObjectCard;
