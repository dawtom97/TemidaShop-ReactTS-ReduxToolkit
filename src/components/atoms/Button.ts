import styled from 'styled-components';
import { GlobalStylesProps } from '../../types/GlobalStyles.types';

type ButtonProps = {
    isSecondary?: boolean,
    theme: GlobalStylesProps
}

export const Button = styled.button`
  background-color: ${(props: ButtonProps) => props.isSecondary ? props.theme.white : props.theme.secondary};
border-radius: 8px;
height: 45px;
padding: 0px 40px;
color: ${({theme})=>theme.white};
font-size: 2.5rem;
font-weight: 700;
letter-spacing: 2px;
border: none;
display: flex;
justify-content: center;
align-items: center;
gap:12px;
box-shadow: ${({theme})=>theme.shadowPrimary};

& > svg {
    font-size: 3.5rem;
}

`