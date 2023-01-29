import Image from 'next/image';
import * as Styled from './styles';

interface Props {
    icon: string;
    desc: string;
}

const WeatherIcon = ({ icon, desc }: Props) => {

  return (
    <Styled.Container>
        <Image src={`/assets/icons/${icon}.png`} alt={desc} width={200} height={200} />
    </Styled.Container>
  )
}

export default WeatherIcon