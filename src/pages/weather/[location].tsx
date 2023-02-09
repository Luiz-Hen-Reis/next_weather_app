import { weatherApi } from "libs/weatherApi";
import { GetServerSideProps } from "next";
import Home from "templates/Home";
import { CurrentWeatherApiResponse, DayForecastApiResponse } from "../../../types/weatherApiResponse";

interface Props {
    currentLocationWeather: CurrentWeatherApiResponse;
    locationDayForecastWeather: DayForecastApiResponse;
}

const Location = ({ currentLocationWeather, locationDayForecastWeather }: Props) => {
    return (
        <Home currentLocationWeather={currentLocationWeather} locationDayForecastWeather={locationDayForecastWeather} />
    )
}

export default Location;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { location } = context.params;

      let currentLocationWeather: CurrentWeatherApiResponse =  await weatherApi.getCurrentWeatherDataByLocation(location as string);
       let locationDayForecastWeather: DayForecastApiResponse =  await weatherApi.getDayForecastDataByLocation(location as string);
    

    return {
        props: {
            currentLocationWeather,
            locationDayForecastWeather
        }
    }
}