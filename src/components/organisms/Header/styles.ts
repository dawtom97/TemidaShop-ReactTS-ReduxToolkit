import styled from 'styled-components';

export const Wrapper = styled.header`
   position: fixed;
   width:100%;
   top:0;
   z-index: 99;
   padding:20px 20px;
   right:0;
   display: flex;
   justify-content: flex-end;
   gap:15px;

& > a {
    font-size: 4rem;
    color:${({theme})=>theme.text};
    text-decoration: none;
    position: relative;

    & > span {
        position: absolute;
        bottom: 7px;
        right:0;
        display: block;
        background-color: #f24141;
        width:18px;
        height: 18px;
        border-radius: 50%;
        line-height: 18px;
        text-align: center;
        font-size: 1.4rem;
        font-weight: 700;
        color:${({theme})=>theme.white}
    }
}
`