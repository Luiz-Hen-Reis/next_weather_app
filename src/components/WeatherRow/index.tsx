import { DataList } from '../../../types/weatherApiResponse'
import * as Styled from './styles'
import { dateFormatter } from 'helpers/dateFormatter';
import WeatherIcon from 'components/WeatherIcon';

interface Props {
  data: DataList;
}

const WeatherRow = ({ data }: Props) => {
  return (
    <Styled.Container>
      <article>{dateFormatter.getHourFromDateAndFormatIt(data.dt)}</article>
      <article><WeatherIcon icon={data.weather[0].icon} desc={data.weather[0].description} size={50} /></article>
      <article>{data.main.temp.toFixed()}º</article>
      <article className='windInfo'>{data.wind.speed.toFixed()}km/h <br /> <span>Vento</span></article>
    </Styled.Container>
  )
}

export default WeatherRow