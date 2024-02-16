import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import '../index.css';

export default function BasketProduct({ product }) {
  const { removeFromBasket, updateQuantity, products } = useContext(CartContext);
  const basketProduct = products.find(p => p.id === product.id);
  const amount = basketProduct ? basketProduct.amount : 0;

  const handleRemove = () => {
    removeFromBasket(product);
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, amount + 1);
  };

  const handleDecreaseQuantity = () => {
    if (amount > 1) {
      updateQuantity(product.id, amount - 1);
    }
  };

  return (
    <div className="basket-product-container">
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-info">
        <p className="product-title">{product.title}</p>
        <span className="product-price">{product.price} €</span>
        <button className="remove-button" onClick={handleRemove}>Supprimer</button>
      </div>
      <div className="action-buttons">
        <div className="quantity-controls">
          <button className="quantity-button" onClick={handleDecreaseQuantity}>-</button>
          <span className="quantity-display">{amount}</span>
          <button className="quantity-button" onClick={handleIncreaseQuantity}>+</button>
        </div>
      </div>
    </div>
  );
}
