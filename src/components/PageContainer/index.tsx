import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
}

const PageContainer = ({ children }: Props) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default PageContainer;
