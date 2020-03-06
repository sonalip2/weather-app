import React from 'react';
import { mount } from 'enzyme';
import TempratureChart from './index';

describe('TempratureChart', () => {
  it('Should render without crashing', () => {
    mount(<TempratureChart />);
  });
});
