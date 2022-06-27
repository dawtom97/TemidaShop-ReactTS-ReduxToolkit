import { Header } from '../organisms/Header/Header';
import * as Styled from './styles'

type TemplateProps = {
    children?:JSX.Element | JSX.Element[] | undefined
}

export const MainTemplate = ({ children }: TemplateProps) => {
  return (
    <Styled.Wrapper>
      <Header />
      {children}
    </Styled.Wrapper>
  );
};
