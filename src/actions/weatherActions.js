/* eslint-disable import/prefer-default-export */
import { GET_WEATHER } from './actionTypes';

export const getWeatherData = () => ({
  type: GET_WEATHER,
  // eslint-disable-next-line no-async-promise-executor
  payload: new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_WEATHER_API_URL}/forecast?q=Munich,de&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      );
      const data = await response.json();

      if (!data || !data.list) {
        return reject(
          new Error({
            data: 'An error occurred. Please try again.',
          }),
        );
      }

      return resolve({
        data,
      });
    } catch (error) {
      const message =
        error && error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'An error occurred. Please try again.';
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject({ data: message });
    }
  }),
});
