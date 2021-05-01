import React from 'react';
import { LayoutWrapper } from './styles';

import {Cart} from '../Cart';


const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        
        <Cart />
        <main>{children}</main>
      </LayoutWrapper>
    </>
  );
};

export { Layout };
