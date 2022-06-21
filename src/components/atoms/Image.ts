import styled from 'styled-components'

type StylesProps = {
    isCurrent?: boolean,
}

export const Image = styled.img<StylesProps>`
      width:55px;
      margin:5px;
      height: 55px;
      object-fit: cover;
      border-radius: 8px;
      opacity: ${({ isCurrent }) => isCurrent ? 1 : 0.5}; 
    
  `