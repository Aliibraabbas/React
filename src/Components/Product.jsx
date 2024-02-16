import { Link }  from 'react-router-dom';
import styled from 'styled-components';

import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext';

const ProductContent = styled.div`
border-radius: 8px;
margin: 10px;
padding: 20px;
width: 320px;
height: 500px;
margin: 20px;
font-weight: 500;
box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
margin-top: 20px;
width: 100%;
height: 300px;
object-fit: cover;
border-radius: 8px;
`;

const Container = styled.div`
  text-align: center;
  margin-top: 20px;
  width: 100%;
`;



const StyledButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;

  border: none;
  border-radius: 5px;
  color: white;
  background-color: #4caf50;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  &:hover {
    background-color: #45a049;
  }
`;

const Product = ({ product }) => {
  const { addToBasket } = useContext(CartContext);

  const handleAdd = () => {
    addToBasket(product);
  };

  return (
    <ProductContent>
      <Image src={product.image} alt={product.title} />
      <Container>
        <div>    
          <div>{product.title}</div>
          <div>{product.price} €</div>
        </div>
        <div>
          <StyledButton onClick={handleAdd}>
            Ajouter au panier
          </StyledButton>

          <Link to={`/products/${product.id}/comments`}>
            <StyledButton>
             View Comments
            </StyledButton>
          </Link>
        </div>
      </Container>
    </ProductContent>
  );
};

export default Product;
