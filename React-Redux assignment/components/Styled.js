import styled from "styled-components";

export const Grid = styled.div`
    width:70%;
    justify-conent:center;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-template-rows:auto;
    div{
        border:1px solid black;
    }
    
    `

export const Select = styled.select``;

export const Flex = styled.div`
    display:flex;
    border:1px solid black;
    text-align:center;

`;
