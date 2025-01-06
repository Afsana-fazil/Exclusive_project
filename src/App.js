import React, { useState } from 'react';
import Nav from './components/Nav';
import './App.css';
import Home from './components/screens/Home';
import Products from './components/screens/Products';
import Footer from './components/Footer';
import ProductDetail from './components/screens/ProductDetail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <Nav setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
