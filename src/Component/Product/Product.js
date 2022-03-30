import React from 'react';
import './Product.css';
import { FaShoppingCart } from 'react-icons/fa';

const Product = ({handleAddToCard,product}) => {
  // const {handleAddToCard}= props;
  const {strCategory,strCategoryThumb,price} = product;
  return (
    <div className='product'>

      <img src={strCategoryThumb} alt=""/>

      <div className='product-info'>
        <p className='product-name'>{strCategory}</p>
        <p>Price: ${price}</p>
      </div>
        <button onClick={ ()=> handleAddToCard(product)} className='order-btn'>
          <p className='order-p'>Order Now</p>
          <FaShoppingCart/>
        </button>
    </div>
  );
};

export default Product;