import React, { SetStateAction, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../components/molecules/ProductCard/ProductCard';
import { ProductsWrapper } from '../components/organisms/ProductsWrapper/ProductsWrapper';
import { MainTemplate } from '../components/templates/MainTemplate';
import { RootState } from '../store/store';

export const HomePage = () => {
  const { allItems } = useSelector((state: RootState) => state.products);
  const [filteredItems, setFileredItems] = useState();
  const [categories, setCategories] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<SetStateAction<string>>('');

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

  const showFilteredItems = useMemo(() => {
    if (!selectedCategory) return;
    const items: any = allItems.filter((item:any) => item.category.includes(selectedCategory))
    setFileredItems(items);
  }, [selectedCategory]);

  console.log(filteredItems);

  return (
    <MainTemplate>
      <ProductsWrapper>
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
      </ProductsWrapper>
      <form action=''>
        {categories.map((category: string) => (
          <label key={category} htmlFor={category}>
            <input
              onChange={() => setSelectedCategory(category)}
              type='radio'
              name='categories'
              id={category}
            />
            {category}
          </label>
        ))}
      </form>
    </MainTemplate>
  );
};
