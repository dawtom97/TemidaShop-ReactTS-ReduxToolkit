import React from 'react';
import { createPortal } from 'react-dom';
import { Paragraph } from '../../atoms/Paragraph';
import { ModalProps } from './Modal.types';
import * as Styled from './styles';

export const Modal = ({msg,isFaded}:ModalProps) => {
  const element= document.getElementById('modal') as HTMLElement;

  return createPortal(
    <Styled.Wrapper>
         {isFaded ? (
             <Paragraph isBold>{msg}</Paragraph>
         ) : (
          null
         )}
    </Styled.Wrapper>,
   element,
  );
};
