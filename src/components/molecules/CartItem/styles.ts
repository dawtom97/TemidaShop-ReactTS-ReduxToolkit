import styled from 'styled-components';

type StylesProps = {
    color:string
}

export const Wrapper = styled.div`
display: flex;
align-items: center;
padding: 15px 10px;
background-color: ${({theme})=>theme.white};
gap:12px;
  & > img {
    width:45px;
    height: 45px;
    object-fit: cover;
    border-radius: 8px;
  }

  &  p {
    display: flex;
    align-items: center;
    gap:5px;
  }
  
`

export const Buttons = styled.div`
  display: flex;
  margin-left: auto;
  gap:10px;
  & > button {
    width:25px;
    color:${({theme})=>theme.text};
    height: 25px;
  }
`

export const ColorBox = styled.span`
   display: inline-block;
   border-radius: 4px;
   background-color: ${({color})=>color};
   width: 15px;
   height: 15px;

`