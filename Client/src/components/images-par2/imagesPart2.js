import React from 'react';

const ImagesPart2 = ({ image }) => {
    const style = {
        backgroundImage: `url("./asset/images/${image}")`
    }
    return (
        <div className="IMAGESPART2-div" style={style}>

        </div>
    );
}

export default ImagesPart2;