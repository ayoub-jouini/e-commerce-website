import React from 'react';
import './imagesPart2.css';
import ImagesPart2 from "./imagesPart2";
import useFetch from '../../services/useFetch';
import LoadingSpinner from '../loading-spinner/LoadingSpiner';

const ImagesPart2Container = () => {
    const { data, error, loading } = useFetch('./asset/images/images.json');
    if (error) throw error;
    if (loading) return <LoadingSpinner />;
    return (
        <div className="IMAGESPART2CONTAINER">
            {
                data && data.length > 0 && data.map(d => {
                    return (
                        d.imgpart.map((img, key) => {
                            return (
                                <ImagesPart2 key={key} image={img} />
                            );
                        }
                        ))
                })
            }
        </div>
    );
}
export default ImagesPart2Container;