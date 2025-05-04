import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}> </Route>
    <Route path='/signup' element={<Signup/>}> </Route>
    <Route path='/about' element={<AboutPage/>}> </Route>
    <Route path='/product' element={<ProductPage/>}> </Route>
    <Route path='/p' element={<HomePage/>}> </Route>
  </Routes>
  </BrowserRouter>
);
