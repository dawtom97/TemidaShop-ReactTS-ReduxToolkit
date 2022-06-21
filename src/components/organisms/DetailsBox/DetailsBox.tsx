import React from 'react';
import { FilterBox } from '../../molecules/FilterBox/FilterBox';
import { Heading } from '../../molecules/Heading/Heading';
import { DetailsProps } from './Details.types';
import * as Styled from './styles'

export const DetailsBox = ({ product }: DetailsProps) => {
  return (
    <Styled.Wrapper>
      <img src={product.images[0]} />
      <Styled.InfoBox>
         <Heading title={product.title} short={product.short}/>
         <div>
            <FilterBox isGraphical title="Colors" options={product.colors}/>
            <FilterBox title="Size" options={product.sizes}/>
         </div>
      </Styled.InfoBox>
    </Styled.Wrapper>
  );
};
