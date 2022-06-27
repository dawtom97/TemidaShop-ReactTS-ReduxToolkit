import React from 'react'
import { Heading } from '../../molecules/Heading/Heading';
import { ProductFiltersProps } from './ProductFilters.types';
import * as Styled from './styles';

export const ProductFilters = ({onReset, onChange,categories}:ProductFiltersProps) => {
  return (
    <Styled.Wrapper>
        <Heading title="Welcome to the Temida Shop" short="Choose one of the categories"/>
    <Styled.Form action=''> 
    <label onChange={onReset} htmlFor='All'>
      <input type='radio' name='categories' id='All' />
      All
    </label>
    {categories.map((category: string) => (
      <label key={category} htmlFor={category}>
        <input
          onChange={() => onChange(category)}
          type='radio'
          name='categories'
          id={category}
        />
        {category}
      </label>
    ))}
  </Styled.Form>
  </Styled.Wrapper>
  )
}