import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
   margin-top:90px;
`

export const Form = styled.form`
  display: flex;
  gap:8px;
  margin-top: 20px;

  & > label {
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: capitalize;
  }
`