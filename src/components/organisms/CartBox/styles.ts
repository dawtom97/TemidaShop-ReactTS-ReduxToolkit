import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 20px;
  margin-top: 50px;

  & > h2 {
    font-size: 2rem;
    display: flex;
    padding: 15px 0;
    justify-content: space-between;
  }

  & > button {
    margin-top: 20px;
  }
`

export const ProductsBox = styled.div`
   padding-bottom: 20px;
   border-bottom: 1px solid ${({ theme }) => theme.grey};
`