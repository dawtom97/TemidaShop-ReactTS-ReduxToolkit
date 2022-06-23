import styled from 'styled-components';


export const Wrapper = styled.div`
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
   flex-direction: column;
   text-transform: uppercase;
   z-index: 100;
   box-shadow: ${({theme}) => theme.shadowSecondary};

   & > p {
    font-size: 1.2rem;
   }
`