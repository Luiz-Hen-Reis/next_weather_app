import { useState, useEffect } from 'react';
import { weatherApi } from 'libs/weatherApi';
import Heading from 'components/Heading';
import PageContainer from 'components/PageContainer';
import GridTwoColumns from 'components/GridTwoColumns';
import {
  CurrentWeatherApiResponse,
  DayForecastApiResponse,
} from '../../types/weatherApiResponse';
import TodaysWeatherContainer from 'components/TodaysWeatherContainer';
import Loading from 'components/Loading';
import Head from 'next/head';

const Home = () => {
  const [currentWeatherData, setCurrentWeatherData] =
    useState<CurrentWeatherApiResponse | null>(null);
  const [todaysForecastData, setTodaysForecastData] =
    useState<DayForecastApiResponse | null>(null);

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

  return (
    <PageContainer>
      {!currentWeatherData && !todaysForecastData && (
        <>
          <Head>
            <title>Loading...</title>
          </Head>
          <Loading />
        </>
      )}
      {currentWeatherData && todaysForecastData && (
        <>
          <Head>
            <title>{currentWeatherData.name} | Previsão</title>
          </Head>
          <Heading
            title={`${currentWeatherData.name}, ${currentWeatherData.sys.country}`}
            date
          />
          <GridTwoColumns data={currentWeatherData} />
          <TodaysWeatherContainer todaysForecastData={todaysForecastData} />
        </>
      )}
    </PageContainer>
  );
};

export default Home;
