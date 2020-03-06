import React, { useState, useEffect } from 'react';
import { Container, Grid, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import TemperatureDetailCardSlider from '../../components/TemperatureDetailCardSlider';
import TempratureChart from '../../components/TempratureChart';

const useStyles = makeStyles({
  tempCard: {
    margin: '0 10px',
    width: '90% !important',
  },
  selectTemperature: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-around',
    alignItems: 'space-around',
  },
});

const Weather = () => {
  const [tempratureData, setTempratureData] = useState([]);
  const [currentTempDate, setCurrentTempDate] = useState(new Date());
  const [temperatureScale, setTempratureScale] = useState('F');
  const weatherData = useSelector((state) => state.weather.weather);
  const classes = useStyles();

  const formatTempData = (tempData) => {
    return tempData.list.map((temp) => ({
      name: `${tempData.date.getDate()} ${tempData.date.getMonth()} ${tempData.date.getYear()}`,
      tempC: temp.main.tempC,
      tempF: temp.main.tempF,
    }));
  };

  useEffect(() => {
    const tempData = Object.values(weatherData)[0];
    setTempratureData(formatTempData(tempData));
    setCurrentTempDate(tempData.date);
  }, [weatherData]);

  const handleCardClick = (tempData) => {
    setTempratureData(formatTempData(tempData));
    setCurrentTempDate(tempData.date);
  };

  const handleTemperatureScaleChange = (e) => {
    setTempratureScale(e.target.value);
  };

  return (
    <Container>
      <Grid container direction="row" justify="center" alignItems="center">
        <RadioGroup
          aria-label="Temperature"
          name="temperature"
          value={temperatureScale}
          onChange={handleTemperatureScaleChange}
          className={classes.selectTemperature}
        >
          <FormControlLabel value="F" control={<Radio color="primary" />} label="Fahrenheit" />
          <FormControlLabel value="C" control={<Radio color="primary" />} label="Celcius" />
        </RadioGroup>
      </Grid>
      <TemperatureDetailCardSlider
        weatherData={weatherData}
        temperatureScale={temperatureScale}
        onCardClick={handleCardClick}
        currentTempDate={currentTempDate}
      />
      <Grid container direction="row" justify="center" alignItems="center">
        <TempratureChart data={tempratureData} temperatureScale={temperatureScale} />
      </Grid>
    </Container>
  );
};

export default Weather;
