import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>

      <div className="item-prices">
        <div className="new-price">
         <p>{props.new_price}€</p>
        </div>
        <div className="old-price">
         <p>{props.old_price}€</p>
        </div>
      </div>
    </div>
  )
}

export default Item
