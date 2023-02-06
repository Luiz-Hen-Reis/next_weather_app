import { dateFormatter } from 'helpers/dateFormatter';
import * as Styled from './styles';

interface Props {
  title: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  date?: boolean;
}

const Heading = ({ title, as, date = false }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Container as={as}>{title}</Styled.Container>
      {date && (
        <Styled.DateContainer as="p">
          {dateFormatter.getDate()}
        </Styled.DateContainer>
      )}
    </Styled.Wrapper>
  );
};

export default Heading;
