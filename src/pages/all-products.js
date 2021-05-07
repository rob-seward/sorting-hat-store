import React from 'react';
import {SEO, Layout, Filters, ProductsGrid} from '../components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';
import queryString from 'query-string';
import {useLocation} from '@reach/router';



const Content = styled.div`
color: black;
display: grid;
grid-gap: 20px;
grid-template-columns: 1fr 3fr;
margin-top: 20px;
`;

//Create a map of all our categorys and the products within them
//we can then look up the map to see what products belong to which category



export default function AllProducts() {
    const {products, collections } = React.useContext(ProductContext);
     //create a blank map
    const collectionProductMap ={};
    //garb the current url in the browser
    const {search} = useLocation();
    //parse it and set to qs
    const qs = queryString.parse(search);
    const searchTerm = qs.s;
    //get the url ids
    const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
    const selectedCollectionIdsMap = {};
    

    selectedCollectionIds.forEach(collectionId =>{
        selectedCollectionIdsMap[collectionId] = true;
    });

        //populate the map
        if (collections) {
            collections.forEach(collection => {
                //this assigns the colections shopify id as the key and sets an empty object
                collectionProductMap[collection.shopifyId] = {};
                    //fills the line aboves object with collection and product id and sets to true
                    collection.products.forEach(product => {
                        collectionProductMap[collection.shopifyId][product.shopifyId]= true;
                    });
            });

        }
        //See what we have
        console.log(collectionProductMap,"collectionsProductMap");

    const filterByCategory = (product) => {
        if(Object.keys(selectedCollectionIdsMap).length){
            for(let key in selectedCollectionIdsMap){
                if(collectionProductMap[key]?.[product.shopifyId]){
                    return true;
                }
            }
            return false;
        }
        return true;
    };

    const filterBySearchTerm = (product) =>{
 if (searchTerm){
        return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
 }
 return true;
    };


    const filteredProducts = products
    .filter(filterByCategory)
    .filter(filterBySearchTerm);

    return (
        <Layout>
            <SEO title="All products" description="Mad Hatter store all products"/>
            {!! searchTerm && !! filteredProducts.length &&
            <h3>
                searchTerm: <strong>'{searchTerm}'</strong>
                </h3>}
            {!!filteredProducts.length &&
                 <h4>Products {filteredProducts.length}</h4>
            }
           
                <Content>
                    <Filters />
                    {!filteredProducts.length &&
                                <div>
                                    <h3>
                                        <span>OH NO NOTHING MATCHES YOUR SEARCH TREM</span>
                                        &nbsp;
                                        <strong>
                                            '{searchTerm}'
                                        </strong>
                                    </h3>
                                    <div>
                                        to help with your search please try:
                                        <br />
                                        <br />
                                        <ul>
                                            <li>checking your spelling</li>
                                            <li>use less words</li>
                                            <li>try a different serach term</li>
                                        </ul>
                                    </div>
                                </div>
                    }
                    
                    {!!filteredProducts.length && (
                        <div>
                            <ProductsGrid products={filteredProducts}/>
                        </div>
                    )}
                    
                    
                    
                </Content>
        </Layout>
    );
}