import styled from "styled-components";

export const HomepageContainer = styled.div`
    padding: 0 15px;
    margin: 50px 0;
    height: auto;
    width: auto;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    z-index: 10;
`

export const BgImg = styled.img`
    width: 312px;
    height: 312px;
    position: fixed;
    left: 0;
    bottom: 0;
    margin-left: -50px;
    margin-bottom: -30px;
    z-index: 8;
    opacity: 0.8;    
    transition: 0.5s;

    :hover{
        opacity: 1.0;
        scale: 1.1;
    }
`

export const BgImgRight = styled.img`
    width: 212px;
    height: 212px;
    position: fixed;
    right: 0;
    bottom: 0;
    margin-right: -50px;
    margin-bottom: -30px;
    z-index: 8;
    opacity: 0.8;    
    transition: 0.4s;

    :hover{
        opacity: 1.0;
        scale: 1.1;
    }
`