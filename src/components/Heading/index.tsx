import { dateFormatter } from 'helpers/dateFormatter';
import * as Styled from './styles';

interface Props {
  city: string;
}

const Heading = ({ city,  }: Props) => {

  return (
    <>
      <Styled.Container>{city}</Styled.Container>
      <Styled.DateContainer as="p">
        {dateFormatter.getDate()}
      </Styled.DateContainer>
    </>
  );
};

export default Heading;
