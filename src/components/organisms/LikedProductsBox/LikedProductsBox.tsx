import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Paragraph } from '../../atoms/Paragraph';
import { Heading } from '../../molecules/Heading/Heading';
import { ProductCard } from '../../molecules/ProductCard/ProductCard';
import * as Styled from './styles';

export const LikedProductsBox = () => {
  const { likedItems } = useSelector((state: RootState) => state.products);
  return (
    <Styled.Wrapper>
      <Heading title='Your favorite products' />
      <div>
        {likedItems.length ? (
          likedItems.map((product) => (
            <ProductCard
              isThumbnail
              images={product.images}
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))
        ) : (
          <Paragraph>Liked products list are empty</Paragraph>
        )}
      </div>
    </Styled.Wrapper>
  );
};
