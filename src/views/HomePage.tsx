import {useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../components/molecules/ProductCard/ProductCard';
import { ProductFilters } from '../components/organisms/ProductFilters/ProductFilters';
import { ProductsWrapper } from '../components/organisms/ProductsWrapper/ProductsWrapper';
import { MainTemplate } from '../components/templates/MainTemplate';
import { RootState } from '../store/store';
import { SingleProduct } from '../types/SingleProduct.types';

export const HomePage = () => {
  const { allItems } = useSelector((state: RootState) => state.products);
  const [filteredItems, setFileredItems] = useState<SingleProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const flatCategories: string[] = [];
    allItems.forEach((item) => {
      const showCategories = Object.values(item.category);
      showCategories.forEach((item) => {
        if (!flatCategories.includes(item)) flatCategories.push(item);
      });
    });
    setCategories(flatCategories.flat());
  }, []);

  useMemo(() => {
    if (!selectedCategory) return;
    const items:SingleProduct[]= allItems.filter((item: SingleProduct) => item.category.includes(selectedCategory));
    setFileredItems(items);
  }, [selectedCategory]);

  const resetFilters = () => {
    setSelectedCategory('');
    setFileredItems([]);
  };

  console.log(filteredItems);

  return (
    <MainTemplate>
      <ProductFilters categories={categories} onReset={resetFilters} onChange={setSelectedCategory}/>

      <ProductsWrapper>
        {!filteredItems.length
          ? allItems.map((product) => (
              <ProductCard
                images={product.images}
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
              />
            ))
          : filteredItems.map((product: SingleProduct) => (
              <ProductCard
                images={product.images}
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
              />
            ))}
      </ProductsWrapper>
    </MainTemplate>
  );
};
