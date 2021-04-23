import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';

export const ImageThumbnailWrapper = styled.section`
  cursor: pointer;
  border: 4px solid ${props => (props.isActive ? 'blue' : '#eee')};
`;



export default function ImageThumbnail ({ isActive, onClick, image }){
    const hadnleClick = ()=> {
        onClick(image);
    };

    return (
    <ImageThumbnailWrapper onClick={hadnleClick} isActive={isActive}>
    <Image fluid={image.localFile.childImageSharp.fluid} />
    </ImageThumbnailWrapper>
    );
}

