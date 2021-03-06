import styled, { css } from 'styled-components';


type StylesProps = {
    isGraphical?: boolean;
    option:string,
    isCurrent: boolean
}


export const Wrapper = styled.div``


export const InnerWrapper = styled.div`
  
`

export const Option = styled.span`
   background-color: ${({ isGraphical,option }:StylesProps) => isGraphical ? option : '#efefef'};
   border: ${({ isGraphical }:StylesProps) => isGraphical ? '6px' : '0'} solid #efefef;
   margin:3px;
   display: inline-block;
   width:25px;
   height:25px;
   text-align: center;
   line-height: 25px;
   text-transform: uppercase;
   font-weight: 700;
   border-radius: 6px;
   ${(props)=>props.isCurrent && css`
     box-shadow:0px 0px 10px 2px #b1b1b1;
   `}
`