import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Cart.css';
import { MdDelete } from 'react-icons/md';

const Cart = () => {
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState([])
  console.log(cart);
  useEffect( () =>{
    fetch('data.json')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[]);

  const handleAddToCard = (product) =>{
    // console.log(product);
    // cart.push(product)
    // const newCart = [...cart,product];
    setCart([...cart,product])
  }

  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(product => <Product handleAddToCard={handleAddToCard} key={product.id} product={product}></Product> )
        }
      </div>
      <div className="cart-container">
        <h3>This is cart container</h3>
        {
          cart.map((item)=>(
            <div className="shop-info">
              <img src={item.strCategoryThumb} alt="" />
              <div>
                <p className='item-name'><b>{item.strCategory}</b></p>
                <p>Price: <b>${item.price}</b></p>
              </div>
              <div className='delet-btn'>
              <MdDelete></MdDelete>
              </div>
              <div>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Cart;