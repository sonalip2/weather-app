import { GET_WEATHER } from '../actions/actionTypes';
import { getWeatherDataGroupByDate } from '../utils';

const initialState = {
  weather: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER: {
      const groupByDate = getWeatherDataGroupByDate(action.payload.data.list);
      return {
        ...state,
        weather: groupByDate,
      };
    }
    default:
      return state;
  }
};
