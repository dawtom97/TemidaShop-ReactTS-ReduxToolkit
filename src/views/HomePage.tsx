import React from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../components/molecules/ProductCard/ProductCard';
import { MainTemplate } from '../components/templates/MainTemplate';
import { RootState } from '../store/store';

export const HomePage = () => {
  const { allItems } = useSelector((state: RootState) => state.products);

  return (
    <MainTemplate>
      <div>
        {allItems.map((product) => (
          <ProductCard
            images={product.images}
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </MainTemplate>
  );
};
