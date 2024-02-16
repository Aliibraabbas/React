import { createContext, useReducer } from "react";
import reducer, { useState } from "./reducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, useState);

    const addToBasket = (product) => {
        let updatedProducts = [...state.products];
        let existingProduct = updatedProducts.findIndex((currentProduct) => currentProduct.id === product.id);
        if (existingProduct !== -1) {
            updatedProducts[existingProduct].amount += 1;
        } else {
            updatedProducts.push({ ...product, amount: 1 });
        }
        
        updatePrice(updatedProducts);

        dispatch({
            type: "add",
            payload: updatedProducts,
        });
    }

    const removeFromBasket = (product) => {
        const updatedBasket = state.products.filter((currentProduct) => currentProduct.id !== product.id);
        
        updatePrice(updatedBasket);

        dispatch({
            type: "remove",
            payload: updatedBasket,
        });
    }

    const updateQuantity = (productId, newQuantity) => {
        const updatedProducts = state.products.map(product => {
            if (product.id === productId) {
                return { ...product, amount: newQuantity };
            }
            return product;
        });

        updatePrice(updatedProducts);

        dispatch({
            type: "update_quantity",
            payload: updatedProducts,
        });
    };

    const updatePrice = (products) => {
        let total = products.reduce((acc, product) => {
            return acc + parseFloat(product.price) * product.amount;
        }, 0);

        dispatch({
            type: "update_price",
            payload: total.toFixed(2),
        });
    }

    const value = {
        total: state.total,
        products: state.products,
        addToBasket,
        removeFromBasket,
        updateQuantity,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;