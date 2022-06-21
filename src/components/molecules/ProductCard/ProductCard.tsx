import React from 'react';
import { NavLink } from 'react-router-dom';
import { Paragraph } from '../../atoms/Paragraph';
import { ProductCardProps } from './ProductCard.types';
import * as Styled from './styles';

export const ProductCard = ({ images, title, price, id, category }: ProductCardProps) => {
  return (
    <Styled.Wrapper>
      <NavLink to={`/product/${id}`}>
        <Styled.ImageBox>
          <img src={images[0]} alt={title} />
        </Styled.ImageBox>
      </NavLink>
      <span>{category.join(', ')}</span>
      <Paragraph>{title}</Paragraph>
      <Paragraph isBold>${price}</Paragraph>
    </Styled.Wrapper>
  );
};
