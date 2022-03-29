import React from 'react';
import './Product.css'

const Product = (props) => {
  const {strCategory,strCategoryThumb,price} = props.product
  return (
    <div className='product'>

      <img src={strCategoryThumb} alt=""/>

      <div className='product-info'>
        <p className='product-name'>{strCategory}</p>
        <p>Price: ${price}</p>
      </div>

    </div>
  );
};

export default Product;