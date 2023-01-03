import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  background-color: #f5f5dc;
  padding: 1.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  /*  */
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.8rem;
`;

export const MenuLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: red;
  font-size: 1.3rem;
`;

export const NavTop = styled.div`
  /* ... */
`;
