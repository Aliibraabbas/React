import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cart from '../assets/shopping-cart.svg';

const HeaderContainer = styled.header`
    background-color: white;
    color: red;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;  
`;

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
`;

const NavItem = styled.li`
    margin-right: 20px;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: 500;
`;

const CartLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
`;

const CartIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

const CartCount = styled.span`
    background-color: red;
    color: #fff;
    padding: 5px 10px;
    border-radius: 50%;
    font-size: 14px;
`;

export default function Header() {
    const { products } = useContext(CartContext);

    const totalProducts = products.reduce((total, product) => total + product.amount, 0);

    return (
        <HeaderContainer>
            <Navbar>
                <NavList>

                    <NavItem>
                        <NavLink to="/">Products</NavLink>
                    </NavItem>
                </NavList>
                <CartLink to="/cart">
                    <CartIcon src={cart} alt="cart" />
                    <CartCount>{totalProducts}</CartCount>
                </CartLink>
            </Navbar>
        </HeaderContainer>
    );
}
