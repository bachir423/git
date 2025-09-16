import React from 'react'

const Item = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <p>{props.new_price}</p>
      <p>{props.old_price}</p>
  
    </div>
  )
}

export default Item
