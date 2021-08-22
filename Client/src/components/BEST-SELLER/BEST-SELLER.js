import React, { useState } from 'react';
import useFetch from '../../services/useFetch';
import Product from '../product/product';
import LoadingSpinner from '../loading-spinner/LoadingSpiner';
import "./BEST-SELLER.css";

const BestSeller = () => {
    const { data, error, loading } = useFetch('http://localhost:5000/api/products/bestSeller');
    console.log(data)
    if (error) throw error;
    if (loading) return <LoadingSpinner />
    return (
        <div className="BESTSELLER-CONTAINER">
            <div className="BESTSELLER-TITlE">
                <h1>BEST-SELLER</h1>
            </div>
            <div className="BESTSELLET-PRODUCTS">
                {
                    data.bestProducts && data.bestProducts.length > 0 && data.bestProducts.map((d, key) => {
                        return <Product key={key}
                            name={d.name}
                            price={d.price}
                            image={d.image}
                            category={d.category}
                            Reference={d.Reference}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default BestSeller;