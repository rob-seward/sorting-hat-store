import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const ProductTileWrapper = styled.div`
border: 1px solid #ddd;
display:flex;
border-top-right-radius: 5px;
border-top-left-radius: 5px;
overflow: hidden;
flex-direction: column;
>${StyledLink} {
    border: 1px solid black;
    padding: 10px;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    color: black;
    cursor: pointer;
    &:hover {
        color: #ddd;
    }
}
`;

export const Title = styled.div`
font-weight: bold;
font-size: 20px;
margin: 20px;
`;


export const Description = styled.div`
color: #999;
text-align: left;
padding: 0px 20px 10px 20px;
`;

export const Price = styled.div`
font-style: italic;
padding: 20px;
font-weight: bold;
margin-top: auto;
`;

export const ProductViewButton = styled.div`
border: 1px solid black;
font-weight: bold;
text-align: center;
padding: 10px;
`;