import { useState, useEffect } from 'react';
import { weatherApi } from 'libs/weatherApi';
import Heading from 'components/Heading';
import PageContainer from 'components/PageContainer';
import GridTwoColumns from 'components/GridTwoColumns';
import { CurrentWeatherApiResponse } from '../../types/weatherApiResponse';

const Home = () => {
  const [data, setData] = useState<CurrentWeatherApiResponse | null>(null);
  // Create loading state to display while loading

  const getUserCurrentPosition = async (lat: number, lon: number) => {
    setData(await weatherApi.getCurrentWeatherDate(lat, lon));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = Number(position.coords.latitude.toFixed(2));
      const lon = Number(position.coords.longitude.toFixed(2));
      
      getUserCurrentPosition(lat, lon);
    });
  }, []);

  console.log(data);

  return (
    <PageContainer>
      {data && (
        <>
          <Heading city={`${data.name}, ${data.sys.country}`} />
          <GridTwoColumns data={data} />
        </>
      )}
    </PageContainer>
  );
};

export default Home;
