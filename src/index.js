import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartScreen from './Pages/CartScreen';
import ProductsScreen from './Pages/ProductsScreen';
import NotFound from './Pages/NotFound';
import ProductScreen from './Pages/ProductScreen';

import { Provider } from 'react-redux'
import { store } from './store'

import { CartProvider } from './Contexts/CartContext';

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <ProductsScreen /> ,
    errorElement: <NotFound />
  },

  {
    path: '/products',
    element: <ProductsScreen />,
    errorElement: <NotFound />
 }, 

  {
    path: '/cart',
    element: <CartScreen />,
    errorElement: <NotFound />,
  },

  {
    path: '/products/:productId/comments',
    element: <ProductScreen /> ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
