import Image from 'next/image';
import * as Styled from './styles';

interface Props {
  icon: string;
  desc: string;
  size: number;
}

const WeatherIcon = ({ icon, desc, size }: Props) => {
  return (
    <Styled.Container>
      <Image
        src={`/assets/icons/${icon}.png`}
        alt={desc}
        width={size}
        height={size}
      />
    </Styled.Container>
  );
};

export default WeatherIcon;
