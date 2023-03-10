import WeatherIcon from 'components/WeatherIcon';
import { useAppContext } from 'contexts/app';
import { dateFormatter } from 'helpers/dateFormatter';
import { stringFormatter } from 'helpers/stringFormatter';
import { useEffect } from 'react';
import { CurrentWeatherApiResponse } from '../../../types/weatherApiResponse';
import * as Styled from './styles';

interface Props {
  data: CurrentWeatherApiResponse;
}

const GridTwoColumns = ({ data }: Props) => {
  const { icon, description } = data.weather[0];

  const { setBackground } = useAppContext();

  useEffect(() => {
    setBackground(`/assets/backgrounds/${data.weather[0].main}.png`);

    return () => {
      setBackground(null);
    };
  }, []);

  return (
    <Styled.Container>
      <Styled.LeftSide>
        <WeatherIcon icon={icon} desc={description} size={200} />
        <Styled.TempContainer>
          <h2>{data.main.temp.toFixed(0)}º</h2>
          <p>{stringFormatter.toCapitalize(description)}</p>
        </Styled.TempContainer>
      </Styled.LeftSide>
      <Styled.RightSide>
        <Styled.Row>
          <article>
            {data.main.temp_max.toFixed(0)}º <span>Max.</span>
          </article>
          <article>
            {data.wind.speed.toFixed(0)}km/h <span>Vento</span>
          </article>
          <article>
            {dateFormatter.formatDate(data.sys.sunrise)}{' '}
            <span>Nascer do Sol</span>
          </article>
        </Styled.Row>
        <Styled.Row>
          <article>
            {data.main.temp_min.toFixed(0)}º <span>Min.</span>
          </article>
          <article>
            {data.main.humidity}% <span>Humidade</span>
          </article>
          <article>
            <>
              {dateFormatter.formatDate(data.sys.sunset)}{' '}
              <span>Pôr do Sol</span>
            </>
          </article>
        </Styled.Row>
      </Styled.RightSide>
    </Styled.Container>
  );
};

export default GridTwoColumns;
