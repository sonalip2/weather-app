import React from 'react';
import { mount } from 'enzyme';
import TemperatureDetailCardSlider from './index';
import weatherData from '../../../__mocks__/weatherData.json';
import { getWeatherDataGroupByDate } from '../../utils';

describe('TemperatureDetailCardSlider', () => {
  it('Should render without crashing', () => {
    mount(
      <TemperatureDetailCardSlider
        weatherData={getWeatherDataGroupByDate(weatherData)}
        temperatureScale="F"
        currentTempDate={new Date()}
        onCardClick={() => {}}
      />,
    );
  });
});
