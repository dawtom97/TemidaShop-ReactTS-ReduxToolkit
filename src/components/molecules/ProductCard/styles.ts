import styled, { css } from 'styled-components';

type StylesProps = {
  isThumbnail?: boolean
}

export const Wrapper = styled.article<StylesProps>`
  width:170px;
  &  p {
    margin-bottom: 5px;
    min-height: 38px;
  }
  &  span {
    font-size: 1.4rem;
    font-weight: 700;
  }
  ${({ isThumbnail }) => isThumbnail && css`
     width:100%;
     display: flex;
     gap: 20px;
     padding: 8px;
     align-items: center;
     border-radius: 12px;
     margin-bottom: 15px;
     box-shadow:${({ theme }) => theme.shadowSecondary};
  `}

  & button {
    box-shadow: none;
    margin-left: auto;
    & > svg {
      color:#f24141
    }
  }
 
`
export const ImageBox = styled.div<StylesProps>`
  height: 230px;
  margin-bottom: 13px;

  & > img {
    width:100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0px 8px 15px 0.5px #b7aeae;
    border-radius: 12px;
  }
  ${({ isThumbnail }) => isThumbnail && css`
    height: 80px;
    width: 80px;
    margin-bottom: 0;

    & > img {
      box-shadow: none;
    };
  `}
`

