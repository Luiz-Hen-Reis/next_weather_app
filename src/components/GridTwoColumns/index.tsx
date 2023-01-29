import WeatherIcon from 'components/WeatherIcon';
import { dateFormatter } from 'helpers/dateFormatter';
import { stringFormatter } from 'helpers/stringFormatter';
import { CurrentWeatherApiResponse } from '../../../types/weatherApiResponse';
import * as Styled from './styles';

interface Props {
  data: CurrentWeatherApiResponse;
}

const GridTwoColumns = ({ data }: Props) => {
  const { icon, description } = data.weather[0];

  return (
    <Styled.Container>
      <Styled.LeftSide>
        <WeatherIcon icon={icon} desc={description} />
        <Styled.TempContainer>
          <h2>{data.main.temp.toFixed(0)}º</h2>
          <p>{stringFormatter.toCapitalize(description)}</p>
        </Styled.TempContainer>
      </Styled.LeftSide>
      <Styled.RightSide>
        <Styled.Row>
          <p>
            {data.main.temp_max.toFixed(0)}º <span>Max.</span>
          </p>
          <p>
            {data.wind.speed.toFixed(0)}km/h <span>Vento</span>
          </p>
          <p>
          {dateFormatter.formatDate(data.sys.sunrise)} <span>Nascer do Sol</span>
          </p>
        </Styled.Row>
        <Styled.Row>
          <p>
            {data.main.temp_min.toFixed(0)}º <span>Min.</span>
          </p>
          <p>
            {data.main.humidity}% <span>Humidade</span>
          </p>
          <p>
            <>
            {dateFormatter.formatDate(data.sys.sunset)} <span>Pôr do Sol</span>
            </>
          </p>
        </Styled.Row>
      </Styled.RightSide>
    </Styled.Container>
  );
};

export default GridTwoColumns;
