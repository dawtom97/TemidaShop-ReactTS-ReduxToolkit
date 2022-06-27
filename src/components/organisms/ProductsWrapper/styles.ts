import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:15px;
  padding: 10px;
  border-top: 1px solid ${({theme})=>theme.grey};
 
`