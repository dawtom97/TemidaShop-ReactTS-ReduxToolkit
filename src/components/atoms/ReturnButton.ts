import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const ReturnButton = styled(NavLink)`
    width:30px;
    margin-right:auto;
    height: 30px;
    background-color: ${({theme})=>theme.white};
    display: flex;
    justify-content:center;
    align-items: center;
    border: none;
    border-radius: 8px;
    font-size: 2.5rem;
    color: ${({theme})=>theme.text};
`