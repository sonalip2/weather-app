import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
import { makeStyles } from '@material-ui/core';

const propTypes = {
  data: PropTypes.shape({}).isRequired,
  temperatureScale: PropTypes.oneOf(['F', 'C']).isRequired,
};

const useStyles = makeStyles({
  chartContainer: {
    width: '80%',
  },
});

const TempratureChart = ({ data, temperatureScale }) => {
  const classes = useStyles();
  return (
    <div className={classes.chartContainer}>
      <ResponsiveContainer width="99%" height={300}>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={temperatureScale === 'F' ? 'temp' : 'tempC'} />
          <YAxis />
          <Tooltip label="Temprature" />
          <Legend content="Temprature" />
          <Bar dataKey={temperatureScale === 'F' ? 'tempF' : 'tempC'} fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

TempratureChart.propTypes = propTypes;
export default TempratureChart;
