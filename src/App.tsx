import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Modal } from './components/organisms/Modal/Modal';
import { calculateTotals } from './store/features/cart/cartSlice';
import { RootState } from './store/store';
import { CartPage } from './views/CartPage';
import { HomePage } from './views/HomePage';
import { LikedProducts } from './views/LikedProducts';
import { ProductDetails } from './views/ProductDetails/ProductDetails';

const App: React.FC = () => {
  const { isOpen, modalMsg } = useSelector((state: RootState) => state.modal);
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [items]);

  return (
    <div>
      {isOpen ? <Modal isFaded msg={modalMsg} /> : null}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/liked' element={<LikedProducts />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
