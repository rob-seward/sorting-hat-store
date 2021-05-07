import React from 'react';
import {SEO, Layout, CartContents} from 'components';

export default function CartPage(){
 return (
     <Layout>
         <SEO title="Cart" description="hop to you drop in Mad Hatter store"/>
         <CartContents />
     </Layout>
 )
}