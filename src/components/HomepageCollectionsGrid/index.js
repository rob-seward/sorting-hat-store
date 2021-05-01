import React from 'react';
import {CollectionTile} from '../CollectionTile';
import {RemainingCollections} from './styles';

export function HomepageCollectionsGrid({collections}) {
    console.log(collections, 'passing down from Homepagegrid' );
//Separate out the collections with find and filter
    const saleCollection = collections.find(collection => collection.title === 'SALE');
    console.log(saleCollection, 'this is the sale collection');
    
    const remainingCollections = collections.filter(collection => collection.title !== 'SALE');
    console.log(remainingCollections, 'this is all the remaining colections');

    return(
        <div>
            {!!saleCollection &&(
                <CollectionTile 
                sale
                title={saleCollection.title}
                description={saleCollection.description}
                backgroundImage={saleCollection.image.localFile.childImageSharp.fluid}
                />
            )}
           <RemainingCollections>
            {remainingCollections.map(collection => (
                <CollectionTile 
                key={collection.shopifyId}
                title={collection.title}
                description={collection.description}
                backgroundImage={collection.image.localFile.childImageSharp.fluid}
                />
            ))}
            </RemainingCollections>
        </div>
    );
}