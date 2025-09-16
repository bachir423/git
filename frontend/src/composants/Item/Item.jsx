import React from 'react'

const Item = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <p>{props.name}</p>

      <div className="item_prices">
        <div className="new_price">
         <p>{props.new_price}</p>
        </div>
        <div className="old_price">
         <p>{props.old_price}</p>
        </div>
      </div>
    </div>
  )
}

export default Item
