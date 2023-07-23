import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';

const RoutesCom = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/categories' element={<CategoryList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesCom;
