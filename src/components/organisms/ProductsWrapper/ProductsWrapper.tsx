import React from 'react';
import * as Styled from './styles';

type ProductsWrapperProps = {
    children?: JSX.Element[] | any
}

export const ProductsWrapper = ({children}:ProductsWrapperProps) => {
  return (
    <Styled.Wrapper>
        {children}
    </Styled.Wrapper>
  )
}
