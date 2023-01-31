import { useState, useEffect } from 'react';
import { weatherApi } from 'libs/weatherApi';
import Heading from 'components/Heading';
import PageContainer from 'components/PageContainer';
import GridTwoColumns from 'components/GridTwoColumns';
import { CurrentWeatherApiResponse, DayForecastApiResponse } from '../../types/weatherApiResponse';
import TodaysWeatherContainer from 'components/TodaysWeatherContainer';

const Home = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState<CurrentWeatherApiResponse | null>(null);
  const [todaysForecastData, setTodaysForecastData] = useState<DayForecastApiResponse | null>(null);
  // Create loading state to display while loading

  const getUserCurrentPosition = async (lat: number, lon: number) => {
    setCurrentWeatherData(await weatherApi.getCurrentWeatherDate(lat, lon));
    setTodaysForecastData(await weatherApi.getDayForecastData(lat, lon));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = Number(position.coords.latitude.toFixed(2));
      const lon = Number(position.coords.longitude.toFixed(2));
      
      getUserCurrentPosition(lat, lon);
    });
  }, []);

  console.log(todaysForecastData);

  return (
    <PageContainer>
      {currentWeatherData && todaysForecastData && (
        <>
          <Heading title={`${currentWeatherData.name}, ${currentWeatherData.sys.country}`} date />
          <GridTwoColumns data={currentWeatherData} />
          <TodaysWeatherContainer todaysForecastData={todaysForecastData} />
        </>
      )}
    </PageContainer>
  );
};

export default Home;
