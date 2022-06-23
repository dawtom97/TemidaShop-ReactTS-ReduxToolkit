import styled, { css } from 'styled-components';

type StylesProps = {
    isFaded:boolean
}
export const Wrapper = styled.div<StylesProps>`
   position: fixed;
   background-color: #ffffffa8;
   top:70px;
   min-width:250px;
   min-height: 40px;
   border-radius: 15px;
   left:50%;
   transform: translateX(-50%);
   padding:5px 12px;
   display: flex;
   justify-content: center;
   align-items: center;
   opacity: 0;
   flex-direction: column;
   text-transform: uppercase;
   z-index: 100;
   box-shadow: ${({theme}) => theme.shadowSecondary};

   & > p {
    font-size: 1.2rem;
   }

   ${({isFaded})=> isFaded && css`
      animation: fadeOut 2s  ease-in forwards 1;
   `}

   @keyframes fadeOut {
    20% {
        opacity: 1;
    }
    95% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
   }
`