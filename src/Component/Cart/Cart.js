import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Cart = () => {
  const [products,setProducts] = useState([]);
  // console.log(products);
  useEffect( () =>{
    fetch('data.json')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])
  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(product => <Product key={product.id} product={product}></Product> )
        }
      </div>
      <div className="cart-container">
        <h3>This is cart container</h3>
        
      </div>
    </div>
  );
};

export default Cart;