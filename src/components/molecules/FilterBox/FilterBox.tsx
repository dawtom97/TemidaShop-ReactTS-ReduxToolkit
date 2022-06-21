import React from 'react';
import { Paragraph } from '../../atoms/Paragraph';
import { FilterProps } from './FilterBox.types';
import * as Styled from './styles';

export const FilterBox = ({ title, options, isGraphical }: FilterProps) => {
  return (
    <Styled.Wrapper>
      <Paragraph>{title}</Paragraph>
      <Styled.InnerWrapper>
        {options.map((option: string) => (
          <Styled.Option option={option} isGraphical={isGraphical} key={option}>
            {isGraphical ? null : option}
          </Styled.Option>
        ))}
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  );
};
