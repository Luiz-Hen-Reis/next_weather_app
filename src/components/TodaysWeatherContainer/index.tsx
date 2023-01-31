import Heading from 'components/Heading';
import WeatherRow from 'components/WeatherRow';
import { DayForecastApiResponse } from '../../../types/weatherApiResponse';
import * as Styled from './styles';

interface Props {
  todaysForecastData: DayForecastApiResponse;
}

const TodaysWeatherContainer = ({ todaysForecastData }: Props) => {
  
  return (
    <Styled.Container>
      <Heading title="Todays Weather" as="h3" />
      <Styled.RowContainer>
        {todaysForecastData.list.map((item, index) => (
          <WeatherRow key={index} />
        ))}
      </Styled.RowContainer>
    </Styled.Container>
  );
};

export default TodaysWeatherContainer;
