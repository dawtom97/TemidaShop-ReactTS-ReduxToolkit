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
          image={product.images[0]}
          key={product.id}
          id={product.id}
          title={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};
