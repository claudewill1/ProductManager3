import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayOneProduct from './components/DisplayOneProduct';
import ProductForm from './components/ProductForm';
import Main from './views/Main'
import EditProduct from './components/EditProduct'
import DisplayAllProducts from './components/AllProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/new-product' element={<ProductForm />}/>
          <Route path="/product/:id" element={<DisplayOneProduct />} />
          <Route path="/" element={<Main />}/>
          <Route path="/product/:id/edit" element={<EditProduct />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
