import { DataList } from '../../../types/weatherApiResponse';
import * as Styled from './styles';
import { dateFormatter } from 'helpers/dateFormatter';
import WeatherIcon from 'components/WeatherIcon';

interface Props {
  data: DataList;
}

const WeatherRow = ({ data }: Props) => {
  return (
    <Styled.Container>
      <article>{dateFormatter.getHourFromDateAndFormatIt(data.dt)} (BR)</article>
      <article>
        <WeatherIcon
          icon={data.weather[0].icon}
          desc={data.weather[0].description}
          size={50}
        />
      </article>
      <article className='flex-article'>
        <div>
          {data.main.temp_min.toFixed()}º <br /> <span>Min.</span>
        </div>
        <div>
          {data.main.temp_max.toFixed()}º <br /> <span>Max.</span>
        </div>
      </article>
      <article className="windInfo">
        {data.wind.speed.toFixed()}km/h <br /> <span>Vento</span>
      </article>
    </Styled.Container>
  );
};

export default WeatherRow;
