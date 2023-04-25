import React from 'react'
import { useLocation } from 'react-router-dom'
import { ProductData } from '../../models/productData';

type CardProps = {setProducts: Function, products: ProductData[] };

function Product(props: CardProps) {
  const index = Number(useLocation().pathname.split("/").pop())
  const product = props.products[Number(index)];
  const changeQty = (value: number) => {
    props.setProducts((prevState: ProductData[]) => {
      const newState = [...prevState];
      newState[index].qty = Math.max(newState[index].qty + value, 0);
      return [...newState];
    })
  }
  return (
    <div className="card" style={{width: '18rem'}}>
    
    <div className="card-body">
        <h5 className="card-title">{product.title} </h5>
        <p className="card-text">{product.description}</p>
        <a href="#" className="btn btn-primary">{product.price}</a>
        <hr></hr>
        <button className='btn btn-primary' onClick={() => changeQty(1)}>+</button>
        <span>{product.qty}</span>
        <button className='btn btn-primary' onClick={() => changeQty(-1)}>-</button>
    </div>
    </div>
  )
}

export default Product