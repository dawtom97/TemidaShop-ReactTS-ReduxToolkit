import React from 'react';
import { Button } from '../../atoms/Button';
import { Paragraph } from '../../atoms/Paragraph';
import { CartItemProps } from './CartItem.types';
import * as Styled from './styles';

export const CartItem = ({ title, color, size, price, image, amount }: CartItemProps) => {
  return (
    <Styled.Wrapper>
      <img src={image} alt={title} />
      <div>
        <Paragraph isBold>{title}</Paragraph>
        <Paragraph>Size: {size}</Paragraph>
        <Paragraph>Color: {color}</Paragraph>
      </div>
      <div>
        <Paragraph>${price}</Paragraph>
      </div>
      <div>
        <Paragraph>{amount}</Paragraph>
      </div>
      <Styled.Buttons>
        <Button isSecondary>+</Button>
        <Button isSecondary>-</Button>
      </Styled.Buttons>
    </Styled.Wrapper>
  );
};
