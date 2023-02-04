import { useState, useEffect } from 'react';
import { weatherApi } from 'libs/weatherApi';
import Loading from 'components/Loading';
import PageContainer from 'components/PageContainer';
import GridTwoColumns from 'components/GridTwoColumns';
import {
  CurrentWeatherApiResponse,
  DayForecastApiResponse,
} from '../../types/weatherApiResponse';
import TodaysWeatherContainer from 'components/TodaysWeatherContainer';
import Head from 'next/head';
import Header from 'components/Header';

interface Props {
  location?: string;
}

const Home = ({ location }: Props) => {
  const [currentWeatherData, setCurrentWeatherData] =
    useState<CurrentWeatherApiResponse | null>(null);
  const [todaysForecastData, setTodaysForecastData] =
    useState<DayForecastApiResponse | null>(null);

  const getUserCurrentPosition = async (
    lat?: number,
    lon?: number,
  ) => {
    if (!location) {
      setCurrentWeatherData(await weatherApi.getCurrentWeatherData(lat, lon));
      setTodaysForecastData(await weatherApi.getDayForecastData(lat, lon));
    }

    if (location) {
      setCurrentWeatherData(
        await weatherApi.getCurrentWeatherDataByLocation(location),
      );
      setTodaysForecastData(
        await weatherApi.getDayForecastDataByLocation(location),
      );
    }
  };

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = Number(position.coords.latitude.toFixed(2));
        const lon = Number(position.coords.longitude.toFixed(2));

        getUserCurrentPosition(lat, lon);
      });

      if(location) {
        getUserCurrentPosition();
      }
    }

    return () => {
      getUserCurrentPosition(0, 0);
    };
  }, []);

  console.log(currentWeatherData)

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
          <Header data={currentWeatherData} />
          <GridTwoColumns data={currentWeatherData} />
          <TodaysWeatherContainer todaysForecastData={todaysForecastData} />
        </>
      )}
    </PageContainer>
  );
};

export default Home;
