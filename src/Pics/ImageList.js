import React from 'react';

import ImageCard from './ImageCard';
import './Image.css';

const ImageList = (props) => {
    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image} />;
    });

    // The above code is one way of doing it using 'image', the other way is to destructure.
    // Refer the below code.

    // const images = props.images.map(({ id, urls, alt_description }) => {
    //     return <img key={id} src={urls.regular} alt={alt_description} />;
    // });

    return (
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList;