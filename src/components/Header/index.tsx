import { useState } from 'react';
import Heading from 'components/Heading';
import { CurrentWeatherApiResponse } from '../../../types/weatherApiResponse';
import * as Styled from './styles';
import { TfiSearch } from 'react-icons/tfi';

interface Props {
  data: CurrentWeatherApiResponse;
}

const Header = ({ data }: Props) => {
  const [search, setSearch] = useState('');

  return (
    <Styled.Container>
      <Heading title={`${data.name}, ${data.sys.country}`} date />
      <Styled.Form method="GET" action={`/weather/${search}`}>
        <input
          type="search"
          placeholder="Previsão do tempo para..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button disabled={search === '' ? true : false}>
          <TfiSearch size={20} />
        </button>
      </Styled.Form>
    </Styled.Container>
  );
};

export default Header;
