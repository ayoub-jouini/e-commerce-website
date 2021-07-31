import React from 'react';
import './product.css';

const Product = ({ name, price }) => {
    return (
        <div className="PRODUCT-CONTAINER">
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    );
}

export default Product;