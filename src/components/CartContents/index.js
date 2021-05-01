import React from 'react';
import CartContext from 'context/CartContext';
import {CartItem} from './styles';
import {CartHeader} from './styles';
import {CartFooter} from './styles';
import { QuantityAdjuster } from '../QuantityAdjuster';
import {RemoveLineItem} from '../RemoveLineItem';





export function CartContents() {
    const {checkout, updateLineItem }= React.useContext(CartContext);

    const handleAdjustQuanity = ({quantity, variantId}) => {
        updateLineItem({quantity, variantId});
    }

    return (
        <section>
            <h1>Your Cart</h1>
            <CartHeader>
                <div>Product</div>
                <div>Unit Price</div>
                <div>Quantity</div>
                <div>Amount</div>
                
            </CartHeader>
            
            {checkout.lineItems.map(item => (
                <CartItem Key={item.variant.id}>
                    
                        <div>
                            <div>{item.title}</div>
                            <div>{item.variant.title === 'Default Title'?'': item.variant.title}</div>
                        </div>
                        <div>{item.variant.price}</div>
                        
                        <div><QuantityAdjuster rob="is cool" item={item} onAdjust={handleAdjustQuanity}/></div>
                        <div>£{(item.quantity * item.variant.price).toFixed(2)}</div>
                        <div><RemoveLineItem lineItemId={item.id} /></div>
                    
                    
                </CartItem>
               
                ))}
                 <CartFooter>
                     
                    <div>Total:</div>
                    <span>£{checkout?.totalPrice}</span>
                </CartFooter>
        </section>
    );
};