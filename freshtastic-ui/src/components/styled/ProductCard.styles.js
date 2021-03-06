import styled from "styled-components";

export const ProductCardWrapper = styled.div`
    width: 15rem;
    height: 18rem;
    transition: 0.3s;
    background-color:  ${ ({theme}) => theme.cardbg };
    border-radius: 15px;
    overflow: hidden;
    :hover {
        scale: 1.02;
    }
`

export const ProductName = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
    text-align: center;
    margin: 0 auto;
    font-family: 'Handlee', cursive;
    font-style: bold;
`

export const ProductDescription = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
    text-align: center;
    margin: 0 auto;
    font-family: 'Handlee', cursive;
    font-size: 12px
`

export const PriceTag = styled.h4`
    text-align: center;
    margin: 10px auto;
    opacity: 0.8;
    font-style: italic;
`

export const ProductCardImage = styled.img`
    position: relative;
    left: 0;
    top: 0;
    height: 10rem;
    width: 100%;
    opacity: 0.8;
    transition: 0.4s;

    :hover {
        opacity: 1.0;
    }
`

