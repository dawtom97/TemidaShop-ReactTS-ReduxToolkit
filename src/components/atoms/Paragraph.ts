import styled from 'styled-components';

type ParagraphProps = {
    isBold?:boolean
}

export const Paragraph = styled.p<ParagraphProps>`
  font-size: 1.6rem;
  font-weight: ${({isBold}) => isBold ? 700 : 400};
`