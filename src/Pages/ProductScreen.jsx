import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery, useGetProductCommentsQuery, useCreateProductCommentMutation } from '../Services/api';
import styled from 'styled-components';
import Header from '../Components/Header';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-top: 100px;
  margin-bottom: 20px;
  text-align: center;
`;

const InputContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  gap: 10px;

  
`;

const Label = styled.label`
  font-size: 18px;
  margin-right: 10px;
  display: flex;
  align-items: center;

`;

const StyledInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 300px;
  
  
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
`;

const CommentItem = styled.li`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  
`;

export default function ProductScreen() {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const { productId } = useParams();

  const productQuery = useGetProductsQuery();
  const productData = productQuery.data && productQuery.data.find(product => product.id === productId);

  const { data, isLoading, refetch } = useGetProductCommentsQuery(productId);

  const [createProductComment] = useCreateProductCommentMutation();

  const handleCreateComment = async () => {
    await createProductComment({ productId, username, comment });
    setUsername('');
    setComment('');
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <Wrapper>
      <Header />
      <Title>Nom du produit : {productData ? productData.title : 'Chargement...'}</Title>
      <InputContainer>
        <Label>Username :</Label>
        <StyledInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Label>Commentaire :</Label>
        <StyledInput
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
            <Button onClick={handleCreateComment}>Create comment</Button>
      </InputContainer>
  
      <CommentList>
        {!isLoading ? (
          data.map((comment) => (
            <CommentItem key={comment.id}>
              <p>Username : {comment.username}</p>
              <p>Commentaire : {comment.comment}</p>
            </CommentItem>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </CommentList>
    </Wrapper>
  );
}
