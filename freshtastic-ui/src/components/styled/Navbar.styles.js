import styled from 'styled-components';
import { Link } from "react-router-dom";
import { ImContrast } from "react-icons/im";

export const NavbarContainer = styled.div`
    width: 100vw;
    background: ${ ({theme}) => theme.background };
    height: 70px;
    overflow: hidden;
    padding: 3px;
`

export const BrandLogo = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
    margin-left: 25px;
    font-style: bold;
    font-size: 1.3em;
    cursor: pointer;
    display: inline-block;
    font-family: 'Permanent Marker', cursive;
`

export const LinksContainer = styled.div`
    float: right;
    margin-top: 30px;
`

export const NavbarLink = styled(Link)`
    text-decoration: none;
    margin-right: 30px;
    color: ${ ({theme}) => theme.font };
    font-size: 1.1em;
`

export const ToggleTheme = styled(ImContrast)`
    margin-right: 30px;
    margin-left: 35px;
    font-size: 1.1em;
    cursor: pointer;
`