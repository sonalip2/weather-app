import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Weather from './index';
import { getWeatherDataGroupByDate } from '../../utils';
import weatherData from '../../../__mocks__/weatherData.json';

describe('Weather', () => {
  const initialState = { weather: { weather: getWeatherDataGroupByDate(weatherData) } };
  const mockStore = configureStore();
  it('Should render without crashing', () => {
    const store = mockStore(initialState);
    mount(
      <Provider store={store}>
        <Weather />
      </Provider>,
    );
  });
});
