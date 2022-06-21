import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  & > img {
    width:100%;
    height: 580px;
    object-fit: cover;
  }
  & > a {
    position: absolute;
    top:20px;
    left:20px;
  }
`


export const InfoBox = styled.div`
  border-radius: 23px 23px 0px 0px;
  padding: 20px;
  background-color: #fff;
  position: relative;
  top:-25px;
`

export const Filters = styled.div`
   display: flex;
   margin:20px 0;
   justify-content: space-between;
`

export const Buttons = styled.div`
   display: flex;
   justify-content: space-between;
`

export const Categories = styled.div`
   position: absolute;
   top:-40px;
   right:20px;

   & > span {
    display: inline-block;
    background-color: #ffffffa8;
    min-width:80px;
    height: 25px;
    margin-left: 10px;
    border-radius: 8px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1.3rem;
   }
`

type StylesProps = {
  isCurrent?:boolean
}

export const Images = styled.div<StylesProps>`
   position: absolute;
   top:40%;
   left:0;
   display: flex;
   flex-direction: column;
   transform: translateY(-50%);
   background-color: #ffffffa8;
   border-radius: 8px;

`