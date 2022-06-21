import styled from 'styled-components';

export const Wrapper = styled.div`

  & > img {
    width:100%;
    height: 500px;
    object-fit: cover;
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

`