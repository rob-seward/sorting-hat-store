import React from 'react';
import { LayoutWrapper } from './styles';
import {Cart} from '../Cart';
import {Header} from '../Header';


const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <Header />
        
        <main>{children}</main>
      </LayoutWrapper>
    </>
  );
};

export { Layout };
