import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './views/HomePage';
import { ProductDetails } from './views/ProductDetails';

const App: React.FC = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
    </div>
  );
};

export default App;
