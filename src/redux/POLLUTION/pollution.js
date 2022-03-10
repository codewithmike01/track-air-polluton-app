/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
const initialState = {
  loading: false,
  gas: [],
  name: ' ',
  error: ' ',
  display: false,
};

const baseUrl = 'http://api.openweathermap.org/data/2.5/air_pollution?';

const FETCH_POLLUTION_REQUEST =
  'track-air-pollution-app/town/FETCH_POLLUTION_REQUEST';
const FETCH_POLLUTION_SUCCESS =
  'track-air-pollution-app/town/FETCH_POLLUTION_SUCCESS';
const FETCH_POLLUTION_FAILURE =
  'track-air-pollution-app/town/FETCH_POLLUTION_FAILURE';
const SET_COUNTRY_NAME = 'track-air-pollution-app/town/SET_COUNTRY_NAME';
const DISPLAY_COUNTRY_MAP = 'track-air-pollution-app/town/DISPLAY_COUNTRY_MAP';

const fetchPollutionRequest = () => ({
  type: FETCH_POLLUTION_REQUEST,
});

export const fetchPollutionSuccess = (payload) => ({
  type: FETCH_POLLUTION_SUCCESS,
  payload,
});

const fetchPollutionFailure = (payload) => ({
  type: FETCH_POLLUTION_FAILURE,
  payload,
});

const setCountryName = (payload) => ({
  type: SET_COUNTRY_NAME,
  payload,
});

export const displayCountryMap = (payload) => ({
  type: DISPLAY_COUNTRY_MAP,
  payload,
});

const pollutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POLLUTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POLLUTION_SUCCESS:
      return {
        ...state,
        loading: false,
        gas: [action.payload],
        error: ' ',
      };
    case FETCH_POLLUTION_FAILURE:
      return {
        ...state,
        loading: false,
        gas: [],
        error: action.payload,
      };
    case SET_COUNTRY_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case DISPLAY_COUNTRY_MAP:
      return {
        ...state,
        display: action.payload,
      };
    default:
      return { ...state };
  }
};
export const fecthPollution = (cord, name) => async (dispatch) => {
  try {
    dispatch(fetchPollutionRequest());
    dispatch(setCountryName(name));
    const response = await fetch(
      `${baseUrl}lat=${cord[0]}&lon=${cord[1]}&appid=9e828e2624199c7cbb9d9cde2d3b483c`
    );
    const data = await response.json();
    const result = {
      gasRate: data.list[0].components,
      rate: data.list[0].main.aqi,
    };
    dispatch(fetchPollutionSuccess(result));
  } catch {
    dispatch(fetchPollutionFailure('Data not available on server yet'));
  }
};

export default pollutionReducer;
