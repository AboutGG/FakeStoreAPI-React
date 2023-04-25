import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { ProductData } from '../../models/productData';

type props = {products: ProductData[]};

function ListProducts(props: props) {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(props.products.reduce((acc, {price, qty})=> acc + price * qty, 0));
  }, [props.products]);

  return (
    <>
    <h1>{price}</h1>
      <ul>
        {props.products.map((product, index) => <li key={product.id}> <Link to={String(index)}>
          <li>{product.title}</li>
        </Link> </li>
        )}
      </ul>
    </>
  );
}

export default ListProducts