import styled from "styled-components";

export const ProductCardWrapper = styled.div`
    width: 15rem;
    height: 18rem;
    transition: 0.3s;
    background-color:  ${ ({theme}) => theme.cardbg };
    border-radius: 15px;
    overflow: hidden;
    :hover {
    }
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