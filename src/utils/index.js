/* eslint-disable no-param-reassign */
export const kToF = (k) => Math.round((((k - 273.15) * 1.8 + 32) * 100) / 100);
export const kToC = (k) => Math.round(((k - 273.15) * 100) / 100);

export const getWeatherDataGroupByDate = (weatherData) => {
  const groupByDate = weatherData.reduce((obj, weather) => {
    const date = new Date(weather.dt_txt);
    const dayOfDate = `${date.getDate().toString()}_date`;

    if (!obj[dayOfDate]) {
      obj[dayOfDate] = {
        date,
        temperatureCSum: 0,
        temperatureFSum: 0,
        list: [],
      };
    }

    const tempInCelcius = kToC(weather.main.temp);
    const tempInFahrenheit = kToF(weather.main.temp);
    obj[dayOfDate].temperatureCSum += tempInCelcius;
    obj[dayOfDate].temperatureFSum += tempInFahrenheit;
    weather.main.tempC = tempInCelcius;
    weather.main.tempF = tempInFahrenheit;
    obj[dayOfDate].list.push(weather);
    return obj;
  }, {});
  return groupByDate;
};
