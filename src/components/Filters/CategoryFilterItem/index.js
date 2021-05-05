import React from 'react';
import {CategoryItemWrapper} from './styles';
import {navigate, useLocation} from '@reach/router';
import {Checkbox} from 'components';
import queryString from 'query-string';

//Set all checkboxes to blank
//onClick 1st create the path in the browser by adding base to ?c= and shopifyId
//2nd useLocation and query to pullout out the collection id from the new url
// if they match set the checkbox to true and flip on the css bu passing down checked.

export function CategoryFilterItem({title, id}){

    const {search}=useLocation();
    const qs = queryString.parse(search);
    const collectionIds = qs.c?.split(',').filter(c => !!c) || [];
    const checked = collectionIds?.find(cId => cId === id)
 
    const onClick=()=> {
        let navigateTo = '/all-products';
        

        let newIds = [];

        if(checked){
            newIds = collectionIds
            .filter(cId => cId !==id)
            .map(cId => encodeURIComponent(cId));
        } else {
            collectionIds.push(id);
            newIds = collectionIds.map(cId => encodeURIComponent(cId));
        }

        if (newIds.length) {
            navigate(`${navigateTo}?c=${newIds.join(',')}`);
        } else {
            navigate(`${navigateTo}`);
        }
        
        
    }

    return (
    <CategoryItemWrapper onClick={onClick}>
        <Checkbox checked={checked}/>
        <div>{title}</div>
        </CategoryItemWrapper>
    );
}