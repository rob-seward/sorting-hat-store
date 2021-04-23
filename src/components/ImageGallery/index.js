import React, {useState} from 'react';
import Image from 'gatsby-image';
import {ImageGalleryWrapper} from './styles';
import ImageThumbnail from './ImageThumbnail';

export function ImageGallery({selectedVariantImageId, images}) {
    const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(
        images.find(({id})=> id === selectedVariantImageId) || images[0]
    );

    React.useEffect(()=> {
        setActiveImageThumbnail(
            images.find(({id})=> id === selectedVariantImageId) || images[0]
        );
    }, [selectedVariantImageId, images, setActiveImageThumbnail]);

    const hadnleClick = image =>{setActiveImageThumbnail(image)};

    return (
        <ImageGalleryWrapper>
        <div>
            <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid}/>
        </div>
        <div>
            {images.map((image)=> {
                return (
                    <ImageThumbnail
                     key={image.id}
                     isActive={activeImageThumbnail.id === image.id}
                      image={image}
                    onClick={hadnleClick}/>
                )
            })}
        </div>
        </ImageGalleryWrapper>
    );
}