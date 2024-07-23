// src/routes/routesConfig.js
import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import ProductView from '../pages/Products/ProductView';
import ContactUs from '../pages/ContactUs';
import MyAccount from '../pages/MyAccount';
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/product',
    element: <Products />,
  },
  {
    path: '/product/productsview',
    element: <ProductView />,
  },
  {
    path: '/contact',
    element: <ContactUs />,
  },
  {
    path: '/account',
    element: <MyAccount />,
  },
  
];

export default routes;
