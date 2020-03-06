import React, { createRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import TemperatureDetailCard from '../TemperatureDetailCard';
import '../../styles/slick-carousel.css';

const propTypes = {
  weatherData: PropTypes.shape({}).isRequired,
  temperatureScale: PropTypes.oneOf(['F', 'C']).isRequired,
  currentTempDate: PropTypes.shape({
    getTime: PropTypes.func.isRequired,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

const useStyles = makeStyles({
  selectTemperature: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-around',
    alignItems: 'space-around',
  },
  arrow: {
    cursor: 'pointer',
  },
  slider: {
    width: '60%',
    marginTop: '20px',
    marginBottom: '20px',
  },
  disabled: {
    cursor: 'unset',
    opacity: '0.3',
  },
});

const TemperatureDetailCardSlider = ({
  weatherData,
  temperatureScale,
  currentTempDate,
  onCardClick,
}) => {
  const temperatureList = Object.keys(weatherData);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = createRef(null);
  const classes = useStyles();

  const slidesToScroll = 1;
  const slidesToShow = 3;
  const numberOfCards = temperatureList.length;
  const totalPage = numberOfCards / slidesToShow + 1;

  const handleSlideNext = () => {
    sliderRef.current.slickNext();
  };

  const handleSlidePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid className={classes.selectTemperature}>
          <ArrowBackIcon
            className={[classes.arrow, currentSlide === 0 ? classes.disabled : ''].join(' ')}
            onClick={handleSlidePrev}
          />
          <ArrowForward
            className={[classes.arrow, currentSlide === totalPage ? classes.disabled : ''].join(
              ' ',
            )}
            onClick={handleSlideNext}
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Slider
          className={classes.slider}
          ref={sliderRef}
          dots={false}
          infinite={false}
          speed={500}
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToScroll}
          initialSlide={0}
          arrows={false}
          beforeChange={handleBeforeChange}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow,
                slidesToScroll,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll,
              },
            },
          ]}
        >
          {temperatureList.map((keyWeather) => {
            const weather = weatherData[keyWeather];
            const sumTemp =
              temperatureScale === 'F' ? weather.temperatureFSum : weather.temperatureCSum;
            return (
              <TemperatureDetailCard
                onClick={() => onCardClick(weather)}
                date={weather.date}
                temperature={`${Math.round(sumTemp / weather.list.length)}${temperatureScale}`}
                key={weather.date}
                isActive={currentTempDate.getTime() === weather.date.getTime()}
              />
            );
          })}
        </Slider>
      </Grid>
    </>
  );
};

TemperatureDetailCardSlider.propTypes = propTypes;
export default TemperatureDetailCardSlider;
