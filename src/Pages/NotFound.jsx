import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #6c757d;
  text-align: center;
  
`;

export default function NotFound() {
    return (
        <Container>
          <Title>404 - Page Not Found</Title>
        </Container>
    );
}
