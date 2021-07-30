import React from 'react';
import './img-slide.css';
import useFetch from '../../services/useFetch';
import LoadingSpinner from '../loading-spinner/LoadingSpiner';

const IMGSlide = () => {
    const { data, error, loading } = useFetch('./asset/images/images.json');
    if (error) throw error;
    if (loading) return <LoadingSpinner />
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="IMGSlid-div carousel-inner">
                {data && data.length > 0 && data.map(d => {
                    return (
                        d.imgslid.map((img, key) => {

                            if (key === 0) {
                                return (
                                    <div key={key} className='carousel-item active'>
                                        <img src={`./asset/images/${img}`} className="d-block w-100" alt={img} />
                                    </div>
                                );
                            }
                            else {
                                return (
                                    <div key={key} className='carousel-item'>
                                        <img src={`./asset/images/${img}`} className="d-block w-100" alt={img} />
                                    </div>
                                );
                            }
                        })
                    )
                })}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default IMGSlide;
