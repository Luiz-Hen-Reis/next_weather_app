import Link from 'next/link';
import * as Styled from './styles';


const NotFound = () => {
    return (
      <Styled.Container>
          <h1>Ops, página não encontrada</h1>
          <Link href={'/'}>Clique aqui para voltar a página inicial</Link>
      </Styled.Container>
    )
  }
  
  export default NotFound