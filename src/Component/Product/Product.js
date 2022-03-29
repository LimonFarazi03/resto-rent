import React from 'react';
import './Product.css';
import { FaShoppingCart } from 'react-icons/fa';

const Product = (props) => {
  const {strCategory,strCategoryDescription,strCategoryThumb,price} = props.product
  return (
    <div className='product'>

      <img src={strCategoryThumb} alt=""/>

      <div className='product-info'>
        <p className='product-name'>{strCategory}</p>
        <p>Price: ${price}</p>
      </div>
        <button className='order-btn'>
          <p>Order Now</p>
        </button>
    </div>
  );
};

export default Product;