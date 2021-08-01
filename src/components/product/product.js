import React from 'react';
import './product.css';
import { Link } from "react-router-dom";

const Product = ({ name, price, image, category, Reference }) => {
    const style = {
        backgroundImage: `url("./asset/images/${image}")`
    }
    return (
        <div className="PRODUCT-CONTAINER">
            <Link to={`/${category}/${Reference}`}>
                <div className="PRODUCT-IMG" style={style}>

                </div>
                <div className="Product-TXT">
                    <h3>{name}</h3>
                    <h5>{category}</h5>
                    <p><b>{price} DT</b></p>
                </div>
            </Link>
        </div>
    );
}

export default Product;