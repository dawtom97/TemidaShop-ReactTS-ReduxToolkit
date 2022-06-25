import React from 'react';
import * as Styled from './styles';
import { AiOutlineHeart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { ReturnButton } from '../../atoms/ReturnButton';
import { IoIosArrowBack } from 'react-icons/io';

export const Header = () => {
  const { likedItems } = useSelector((state: RootState) => state.products);
  const {items:cartItems} = useSelector((state:RootState) => state.cart);
  return (
    <Styled.Wrapper>
      <ReturnButton to='/'>
        <IoIosArrowBack />
      </ReturnButton>

      <NavLink to='/liked'>
        <AiOutlineHeart />
        {likedItems.length ? <span>{likedItems.length}</span> : null}
      </NavLink>
      <NavLink to='/cart'>
        <IoCartOutline />
        {cartItems.length ? <span>{cartItems.length}</span> : null}
      </NavLink>
    </Styled.Wrapper>
  );
};
