import React from 'react';
import { Layout, SEO, HomepageCollectionsGrid } from 'components';
import ProductContext from 'context/ProductContext';
import { FeaturedProducts } from '../components';

const IndexPage = () => {
  const {collections} = React.useContext(ProductContext);
  console.log(collections);

  return (
      <Layout>
        <SEO title="Homepage" description="Crazy hats from the Mad Hatter store"/>
        <HomepageCollectionsGrid
         collections={collections.filter(
           collection => collection.title !== 'Featured hats'
          )}
        />
          {!!collections.find(
            collection => collection.title === 'Featured hats') && 
          <FeaturedProducts />}
          
      </Layout>)
    };

export default IndexPage;
