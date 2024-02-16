import React, { useContext } from 'react';
import Header from '../Components/Header';
import BasketProduct from '../Components/BasketProduct';
import { CartContext } from '../Contexts/CartContext';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f4f4;
    min-height: 100vh;
    
`;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 150px;
    
`;

const EmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 150px;
`;

const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-top: 20px;
    font-weight: bold;
    font-size: 1.2rem;
`;

export default function CartScreen() {
    const { products, total } = useContext(CartContext);
    const totalProducts = products.reduce((total, product) => total + product.amount, 0);

    return (
        <Container>
            <Header />
            {totalProducts ? (
                <ProductContainer>
                    {products.map((product, i) => (
                        <BasketProduct key={i} product={product} />
                    ))}
                    <TotalContainer>
                        <p>Total</p>
                        <p>{total} €</p>
                    </TotalContainer>
                </ProductContainer>
            ) : (
                <EmptyContainer>
                    <p>Votre panier est vide</p>
                    <p>Allez sur la page des produits pour en ajouter</p>
                </EmptyContainer>
            )}
        </Container>
    );
}
