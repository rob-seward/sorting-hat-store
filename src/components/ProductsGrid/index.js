import React from 'react';
import {ProductGridWrapper} from './styles';
import {ProductTile} from '../ProductTile';

export function ProductsGrid({products}) {
    
return (
    <ProductGridWrapper>
        {products.map(product => (
        <ProductTile 
            key={product.shopifyId}
            title={product.title}
            imageFluid={product.images[0].localFile.childImageSharp.fluid}
            minPrice={product.priceRange.minVariantPrice.amount}
            description={product.description}
            handle={product.handle}
            />
        ))}
    </ProductGridWrapper>
);

}