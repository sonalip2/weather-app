import React from 'react';
import { mount } from 'enzyme';
import TemperatureDetailCard from './index';

describe('TemperatureDetailCard', () => {
  it('Should render without crashing', () => {
    mount(
      <TemperatureDetailCard
        temperature="30C"
        date={new Date()}
        isActive={false}
        onClick={() => {}}
      />,
    );
  });
});
