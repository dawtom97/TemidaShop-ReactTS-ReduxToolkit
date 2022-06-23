import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Modal } from './components/organisms/Modal/Modal';
import { RootState } from './store/store';
import { HomePage } from './views/HomePage';
import { LikedProducts } from './views/LikedProducts';
import { ProductDetails } from './views/ProductDetails';

const App: React.FC = () => {
  const { isOpen, modalMsg } = useSelector((state: RootState) => state.modal);

  return (
    <div>
      {isOpen ? <Modal isFaded msg={modalMsg} /> : null}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/liked' element={<LikedProducts/>}/>
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
