import React from 'react'

const Item = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <p>{props.name}</p>

       <div className="new_price">
        <p>{props.new_price}</p>
       </div>
       <div className="old_price">
        <p>{props.old_price}</p>
      </div>

    </div>
  )
}

export default Item
