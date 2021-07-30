import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="lds-container">
            <div className="loading lds-dual-ring" >
            </div>
        </div>
    )
}

export default LoadingSpinner;