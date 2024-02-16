import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import CartContext from '../Contexts/CartContext';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled(Link)`
  margin-right: 20px;
  color: white;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #007bff;
  }

  span {
    position: absolute;
    right: -10px;
    top: -10px;
    background-color: red;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: white;
  }
`;

export default function Header() {
  const location = useLocation();
  const [itemCount, setItemCount] = useState(0);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    setItemCount(storedCartItems ? storedCartItems.length : 0);
  }, [location, cartContext]);

  return (
    <HeaderContainer>
      <Nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/cart">
          <img width={40} height={40} src="data:image/png;" alt="Cart" />
          {itemCount > 0 && <span>{itemCount}</span>}
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
}
