import React, { useState } from 'react';
import useFetch from '../../services/useFetch';
import Product from '../product/product';
import LoadingSpinner from '../loading-spinner/LoadingSpiner';
import "./BEST-SELLER.css";

const BestSeller = () => {
    const { data, error, loading } = useFetch('./products-Data.json');
    if (error) throw error;
    if (loading) return <LoadingSpinner />
    return (
        <div className="BESTSELLER-CONTAINER">
            {
                data && data.length > 0 && data.map((d, key) => {
                    if (d.bestSeller === true) return <Product key={key} name={d.name} price={d.price} />
                })
            }
        </div>
    );
}

export default BestSeller;