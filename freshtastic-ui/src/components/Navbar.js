import React from "react";
import { NavbarContainer, BrandLogo, LinksContainer, NavbarLink, ToggleTheme } from "./styled/Navbar.styles";
import { FaHome, FaShoppingCart, FaUser, FaHistory  } from 'react-icons/fa'
import { appTitle } from '../res/strings/common-strings'

export default function Navbar({ toggleSiteTheme }) {
  return (
    <NavbarContainer>
      <BrandLogo>{ appTitle }</BrandLogo>
      <LinksContainer> 
        <NavbarLink to = '/home'><FaHome/></NavbarLink>
        <NavbarLink to = '/cart'><FaShoppingCart/></NavbarLink>
        <NavbarLink to = '/orderhistory'><FaHistory/></NavbarLink>
        <NavbarLink to = '/profile'><FaUser/></NavbarLink>
        <ToggleTheme onClick = { toggleSiteTheme }/>
      </LinksContainer>
    </NavbarContainer>
  );
}
