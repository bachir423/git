import react from 'react'
import './Popular.css'
import data_product from '../Assets/all_product'
import Item from '../Item/Item'

const Popular = () => {
  return (
  <div className="Popular">
    <h2>Popular</h2>
    <hr />
    <div className="popular-item">

      {data_product.map((item,i)=>{
      return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
  
    </div> 
  </div>
  )
}

export default Popular
