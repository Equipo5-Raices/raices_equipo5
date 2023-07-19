
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Product from './pages/Product/Product';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
         <Routes >
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/Product/:id' element={<Product/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;