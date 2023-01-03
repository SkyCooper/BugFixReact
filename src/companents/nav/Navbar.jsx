import React from "react";
import { Nav, Logo, Menu, MenuLink, Div } from "./Navbar.style";
import Headerlogo from "../../assest/header.png";

const Navbar = () => {
  return (
    <Div>
      <Nav>
        <Logo src={Headerlogo} />
        <Menu>
          <MenuLink to="/about">About As</MenuLink>
          <MenuLink to="/games">Games</MenuLink>
          <MenuLink to="/news">News</MenuLink>
          <MenuLink to="/career">Career</MenuLink>
          <MenuLink to="/contact">Contact</MenuLink>
        </Menu>
      </Nav>
    </Div>
  );
};

export default Navbar;
