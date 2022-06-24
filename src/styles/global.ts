import { createGlobalStyle } from 'styled-components';
import { GlobalStylesProps } from '../types/GlobalStyles.types';

export const GlobalStyles = createGlobalStyle<{ theme: GlobalStylesProps }>`
   *,
   *::before,
   *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
        font-size: 8px;
        @media screen and (min-width:768px) {
            font-size:10px;
        }
    }

    body {
        font-family:'Roboto',sans-serif;
        background-color: ${props => props.theme.body};
        color:${props => props.theme.text};
    }
    a {
        color:${props => props.theme.text};
        text-decoration :none ;
    }
`