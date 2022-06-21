import React from 'react';
import { Paragraph } from '../../atoms/Paragraph';
import { Title } from '../../atoms/Title';
import { HeadingProps } from './Heading.types';
import * as Styled from './styles';

export const Heading = ({ title, short }: HeadingProps) => {
  return (
    <Styled.Wrapper>
      <Title>{title}</Title>
      <Paragraph>{short}</Paragraph>
    </Styled.Wrapper>
  );
};
