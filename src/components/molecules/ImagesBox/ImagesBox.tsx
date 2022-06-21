import React from 'react';
import { Image } from '../../atoms/Image';
import { ImageBoxProps } from './ImagesBox.types';
import * as Styled from './styles';

export const ImagesBox = ({images,onClick,currentImage}:ImageBoxProps) => {
  return (
    <Styled.Images>
    {images.map((image:string, index: number) => (
      <Image isCurrent={currentImage === image ? true : false} onClick={() => onClick(index)} key={index} src={image} />
    ))}
  </Styled.Images>
  )
}
