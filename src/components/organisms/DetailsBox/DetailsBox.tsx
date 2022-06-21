import React from 'react';
import { Button } from '../../atoms/Button';
import { FilterBox } from '../../molecules/FilterBox/FilterBox';
import { Heading } from '../../molecules/Heading/Heading';
import { DetailsProps } from './Details.types';
import * as Styled from './styles';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

export const DetailsBox = ({ product }: DetailsProps) => {
  return (
    <Styled.Wrapper>
      <img src={product.images[0]} />
      <Styled.InfoBox>
         <Heading title={product.title} short={product.short}/>
         <Styled.Filters>
            <FilterBox isGraphical title="Colors" options={product.colors}/>
            <FilterBox title="Size" options={product.sizes}/>
         </Styled.Filters>
         <Styled.Buttons>
             <Button>${product.price} <HiOutlineArrowNarrowRight/> </Button>
         </Styled.Buttons>
      </Styled.InfoBox>
    </Styled.Wrapper>
  );
};
