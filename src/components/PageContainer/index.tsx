import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
}

const PageContainer = ({ children }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Container>{children}</Styled.Container>
    </Styled.Wrapper>
  );
};

export default PageContainer;
