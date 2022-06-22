import styled, { css } from 'styled-components';
import { GlobalStylesProps } from '../../types/GlobalStyles.types';

type ButtonProps = {
  isSecondary?: boolean,
  theme: GlobalStylesProps,
  isIconButton?: boolean
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props: ButtonProps) => props.isSecondary ? props.theme.white : props.theme.secondary};
border-radius: 8px;
height: 45px;
padding: 0px 50px;
color: ${(props: ButtonProps) => props.isSecondary ? props.theme.grey : props.theme.white};;
font-size: 2.5rem;
font-weight: 700;
letter-spacing: 2px;
border: none;
display: flex;
justify-content: center;
align-items: center;
gap:12px;
box-shadow: ${({ theme }) => theme.shadowPrimary};

& > svg {
    font-size: 3.5rem;
}
${({ isSecondary }) => isSecondary && css`
   width:45px;
   padding: 0;
`}
${({ isIconButton }) => isIconButton && css`
   background-color:none;
   width:50px;
   height: 50px;
   padding:0;
`
  }

`