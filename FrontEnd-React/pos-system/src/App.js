
import './App.css';
import React, { useState, useEffect } from 'react';

import Users from './Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Product'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Orders from './Orders';
import EditOrder from './EditOrder';




import HomePage from './pages/HomePage';


import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  return (
<div className='cont'>
      <BrowserRouter>
        <Routes>
          {/* Default route opens HomePage */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id/editorder" element={<EditOrder />} />
          <Route path="/users" element={<Users />} />
          
        </Routes>
      </BrowserRouter>
    </div>


  )

}

export default App;
