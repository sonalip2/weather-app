import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  loader: {
    border: '5px solid #f3f3f3',
    borderRadius: '50%',
    borderTop: '5px solid #555',
    width: '50px',
    height: '50px',
    animation: '$spin 2s linear infinite',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.loader} />
    </div>
  );
};
export default Loader;
