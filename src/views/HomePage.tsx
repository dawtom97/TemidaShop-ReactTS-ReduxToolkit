import React from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../components/molecules/ProductCard/ProductCard';
import { RootState } from '../store/store';

export const HomePage = () => {
  const { allItems } = useSelector((state: RootState) => state.products);
 
  return (
    <div>
      {allItems.map((product) => (
        <ProductCard
          images={product.images}
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};
