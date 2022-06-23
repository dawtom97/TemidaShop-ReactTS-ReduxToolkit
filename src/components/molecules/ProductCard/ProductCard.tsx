import React from 'react';
import { NavLink } from 'react-router-dom';
import { Paragraph } from '../../atoms/Paragraph';
import { ProductCardProps } from './ProductCard.types';
import * as Styled from './styles';

export const ProductCard = ({
  images,
  title,
  price,
  id,
  category,
  isThumbnail,
}: ProductCardProps) => {
  return (
    <Styled.Wrapper isThumbnail={isThumbnail}>
      <NavLink to={`/product/${id}`}>
        <Styled.ImageBox isThumbnail={isThumbnail}>
          <img src={images[0]} alt={title} />
        </Styled.ImageBox>
      </NavLink>
      <div>
        <span>{category.join(', ')}</span>
        <Paragraph>{title}</Paragraph>
        <Paragraph isBold>${price}</Paragraph>
      </div>
    </Styled.Wrapper>
  );
};
