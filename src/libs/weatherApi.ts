import axios from 'axios';

const apiBaseUrl = 'https://api.openweathermap.org/data/2.5/';

const apiKey = process.env.NEXT_PUBLIC_APIKEY;

export const weatherApi = {
  getCurrentWeatherData: async (latitude: number, longitude: number) => {
    const res = await axios.get(
      `${apiBaseUrl}weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt&appid=${apiKey}`,
    );
    return res.data;
  }
  ,getDayForecastData: async (latitude: number, longitude: number) => {
    const res = await axios.get(
      `${apiBaseUrl}forecast?lat=${latitude}&lon=${longitude}&units=metric&cnt=6&lang=pt&appid=${apiKey}`,
    );
    return res.data;
  },
  getCurrentWeatherDataByLocation: async (location: string) => {
    const res = await axios.get(
      `${apiBaseUrl}weather?q=${location}&units=metric&lang=pt&appid=${apiKey}`,
    );
    return res.data;
  },
  getDayForecastDataByLocation: async (location: string) => {
    const res = await axios.get(
      `${apiBaseUrl}forecast?q=${location}&units=metric&cnt=6&lang=pt&appid=${apiKey}`,
    );
    return res.data;
  }
};
