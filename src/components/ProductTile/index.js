import React from 'react';

import Img from 'gatsby-image';
import {StyledLink} from '../StyledLink';
import { ProductTileWrapper, Description, Title, Price } from './styles';

export function ProductTile({title, imageFluid, description, minPrice, handle}) {
    console.log('from the product tile');
return(<ProductTileWrapper>
        <Img fluid={imageFluid} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Price>from £{parseFloat(minPrice).toFixed(2)}</Price>
    
    
    <StyledLink to={`/products/${handle}`}>View product</StyledLink>
    </ProductTileWrapper>)
}