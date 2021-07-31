import React from 'react';
import './product.css';

const Product = ({ name, price, image, category }) => {
    const style = {
        backgroundImage: `url("./asset/images/${image}")`
    }
    return (
        <div className="PRODUCT-CONTAINER">
            <div className="PRODUCT-IMG" style={style}>

            </div>
            <div className="Product-TXT">
                <h3>{name}</h3>
                <h5>{category}</h5>
                <p><b>{price} DT</b></p>
            </div>
        </div>
    );
}

export default Product;