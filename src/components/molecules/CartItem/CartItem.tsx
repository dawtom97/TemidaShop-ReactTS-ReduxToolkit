import React from 'react';
import { useDispatch } from 'react-redux';
import {
  decreaseAmount,
  increaseAmount,
  removeFromCart,
} from '../../../store/features/cart/cartSlice';
import { Button } from '../../atoms/Button';
import { Paragraph } from '../../atoms/Paragraph';
import { CartItemProps } from './CartItem.types';
import * as Styled from './styles';

export const CartItem = ({ title, color, size, price, image, amount, cartId }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleIncreaseAmount = (cartId: string) => {
    dispatch(increaseAmount(cartId));
  };
  const handleDecreaseAmount = (cartId: string) => {
    if (amount > 1) {
      dispatch(decreaseAmount(cartId));
    } else {
      dispatch(removeFromCart(cartId));
    }
  };

  return (
    <Styled.Wrapper>
      <img src={image} alt={title} />
      <div>
        <Paragraph isBold>{title}</Paragraph>
        <Paragraph>Size: {size}</Paragraph>
        <Paragraph>
          Color: <Styled.ColorBox color={color} />
        </Paragraph>
      </div>
      <div>
        <Paragraph>${price}</Paragraph>
      </div>
      <div>
        <Paragraph isBold>{amount}</Paragraph>
      </div>
      <Styled.Buttons>
        <Button onClick={() => handleIncreaseAmount(cartId)} isSecondary>
          +
        </Button>
        <Button onClick={() => handleDecreaseAmount(cartId)} isSecondary>
          -
        </Button>
      </Styled.Buttons>
    </Styled.Wrapper>
  );
};
