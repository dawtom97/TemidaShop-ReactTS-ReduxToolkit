import React from 'react';
import * as Styled from './styles';
import { AiOutlineHeart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import {IoCartOutline} from 'react-icons/io5'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export const Header = () => {
  const {likedItems} = useSelector((state: RootState) => state.products);
  return (
    <Styled.Wrapper>
      <NavLink to='/liked'>
        <AiOutlineHeart />
        {likedItems.length ? <span>{likedItems.length}</span>:null}
      </NavLink>
      <NavLink to='/cart'>
         <IoCartOutline/>
         <span>4</span>
      </NavLink>
    </Styled.Wrapper>
  );
};
