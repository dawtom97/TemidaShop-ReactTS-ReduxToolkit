import { Header } from '../organisms/Header/Header';

type TemplateProps = {
    children?:JSX.Element | JSX.Element[]
}

export const MainTemplate = ({ children }: TemplateProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
