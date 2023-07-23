import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from '../components/ProductList';

const RoutesCom = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesCom;
