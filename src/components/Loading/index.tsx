import Image from 'next/image';
import * as Styled from './styles';

const Loading = () => {
  return (
    <Styled.Container>
      <Image src="/assets/loading.svg" alt="loading" width={200} height={200} />
      <span>Carregando...</span>
    </Styled.Container>
  );
};

export default Loading;
