import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  & > img {
    width:100%;
    min-height: 530px;
    max-height: 700px;
    object-fit: cover;
  }
  & > a {
    position: absolute;
    top:20px;
    left:20px;
    z-index: 100;
  }
  @media screen and (min-width:768px){
    display: flex;
    width:1444px;

    & > img {
      width:50%;
      border-radius: 23px;
    }
  }
`


export const InfoBox = styled.div`
  border-radius: 23px 23px 0px 0px;
  padding: 20px;
  background-color: #fff;
  position: relative;
  top:-25px;

  & > header:last-of-type {
    margin-top: 50px;
    & > p {
      margin-bottom: 15px;
    }
  }

  @media screen and (min-width:768px){
      width:50%;
      top:0;
  }
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
   @media screen and (min-width:768px){
      position:relative;
      top:0;
      left:0;
  }

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
    @media screen and (min-width:768px){

        text-align: left;
        margin-left: 0;
        min-width: initial;
        margin-right: 15px;
  }
   }
`

type StylesProps = {
  isCurrent?: boolean
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

export const SimilarProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  & > a {
    width: 100%;
    & > article {
      width: 100%;
    }
    @media screen and (min-width:768px){

    width: 30%;
}
  }


`