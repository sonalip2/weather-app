import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const propTypes = {
  temperature: PropTypes.string.isRequired,
  date: PropTypes.shape({
    getDate: PropTypes.func.isRequired,
    getMonth: PropTypes.func.isRequired,
    getYear: PropTypes.func.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const useStyles = makeStyles({
  tempCard: {
    margin: '0 10px',
    display: 'inline-block',
    width: '90%',
    cursor: 'pointer',
  },
  active: {
    border: '2px solid black',
  },
});

const TemperatureDetailCard = ({ temperature, date, isActive, onClick }) => {
  const classes = useStyles();
  return (
    <Card
      className={[classes.tempCard, isActive ? classes.active : ''].join(' ')}
      onClick={onClick}
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          Temp:
          <br />
          {temperature}
          <br />
          Date:
          <br />
          {`${date.getDate()} ${months[date.getMonth()]} ${date.getYear()}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

TemperatureDetailCard.propTypes = propTypes;
export default TemperatureDetailCard;
