import styled from 'styled-components';

export const Wrapper = styled.article`
  width:170px;
  & > p {
    margin-bottom: 5px;
  }
  & > span {
    font-size: 1.4rem;
    font-weight: 700;
  }
 
`
export const ImageBox = styled.div`
  height: 230px;
  margin-bottom: 13px;
  & > img {
    width:100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0px 8px 15px 0.5px #b7aeae;
    border-radius: 12px;
  }
`

