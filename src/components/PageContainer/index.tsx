import { useAppContext } from 'contexts/app';
import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
}

const PageContainer = ({ children }: Props) => {
  const { background } = useAppContext();

  return (
    <Styled.Wrapper background={background}>
      <Styled.Container>{children}</Styled.Container>
    </Styled.Wrapper>
  );
};

export default PageContainer;
