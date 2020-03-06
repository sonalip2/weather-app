/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loader from './components/Loader';
import Weather from './containers/Weather';
import { getWeatherData } from './actions/weatherActions';
import './styles/base.css';

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherData()).then(() => setShowLoader(false));
  }, [dispatch]);

  if (showLoader) {
    return <Loader />;
  }

  return <Weather />;
};

export default App;
