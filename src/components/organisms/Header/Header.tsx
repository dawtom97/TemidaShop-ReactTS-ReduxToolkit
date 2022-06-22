import React from 'react';
import * as Styled from './styles';
import { AiOutlineHeart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import {IoCartOutline} from 'react-icons/io5'

export const Header = () => {
  return (
    <Styled.Wrapper>
      <NavLink to='/liked'>
        <AiOutlineHeart />
        <span>1</span>
      </NavLink>
      <NavLink to='/cart'>
         <IoCartOutline/>
         <span>4</span>
      </NavLink>
    </Styled.Wrapper>
  );
};
