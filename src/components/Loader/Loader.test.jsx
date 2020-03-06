import React from 'react';
import { mount } from 'enzyme';
import Loader from './index';

describe('Loader', () => {
  it('Should render without crashing', () => {
    mount(<Loader />);
  });
});
