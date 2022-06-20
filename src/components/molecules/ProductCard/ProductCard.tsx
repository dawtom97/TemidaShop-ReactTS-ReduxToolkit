import React from 'react';
import { NavLink } from 'react-router-dom';
import { Paragraph } from '../../atoms/Paragraph';
import { ProductCardProps } from './ProductCard.types';
import * as Styled from './styles';

export const ProductCard = ({ image, title, price, id }: ProductCardProps) => {
  return (
    <Styled.Wrapper>
      <NavLink to={`/product/${id}`}>
      <Styled.ImageBox>
        <img src={image} alt={title} />
      </Styled.ImageBox>
      </NavLink>
      <Paragraph>{title}</Paragraph>
      <Paragraph isBold>${price}</Paragraph>
    </Styled.Wrapper>
  );
};
