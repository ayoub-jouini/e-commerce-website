import React from 'react';
import './img-slide.css';

const IMGSlide = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="IMGSlid-div carousel-inner">
                <div class="carousel-item active">
                    <img src="./asset/images/felipe-galvan-AhfrA5VQNpM-unsplash.jpg" class="d-block w-100" alt="felipe-galvan-AhfrA5VQNpM-unsplash" />
                </div>
                <div class="carousel-item">
                    <img src="./asset/images/hannah-morgan-ycVFts5Ma4s-unsplash.jpg" class="d-block w-100" alt="hannah-morgan-ycVFts5Ma4s-unsplash" />
                </div>
                <div class="carousel-item">
                    <img src="./asset/images/keagan-henman-xPJYL0l5Ii8-unsplash.jpg" class="d-block w-100" alt="keagan-henman-xPJYL0l5Ii8-unsplash" />
                </div>
                <div class="carousel-item">
                    <img src="./asset/images/nimble-made-DRM_6zFkPFw-unsplash.jpg" class="d-block w-100" alt="nimble-made-DRM_6zFkPFw-unsplash" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default IMGSlide;
