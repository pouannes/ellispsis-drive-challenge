import React from 'react'

function ObjectCard({object}) {
  console.log(object);
  return (
    <div>
      <p>I'm the object {object.name}</p>
    </div>
  )
}


export default ObjectCard;