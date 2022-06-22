import React from 'react';
import { Paragraph } from '../../atoms/Paragraph';
import { FilterProps } from './FilterBox.types';
import * as Styled from './styles';

export const FilterBox = ({ title, options, isGraphical, onClick, currentValue }: FilterProps) => {
  return (
    <Styled.Wrapper>
      <Paragraph>{title}</Paragraph>
      <Styled.InnerWrapper>
        {options.map((option: string) => (
          <Styled.Option
            isCurrent={currentValue === option ? true : false}
            option={option}
            isGraphical={isGraphical}
            key={option}
            onClick={() => onClick(option)}
          >
            {isGraphical ? null : option}
          </Styled.Option>
        ))}
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  );
};
