import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReduxPromise from 'redux-promise';
import App from './App';

describe('Weather', () => {
  const initialState = {};
  const mockStore = configureStore([ReduxPromise]);
  it('Should render without crashing', () => {
    const store = mockStore(initialState);
    shallow(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});
