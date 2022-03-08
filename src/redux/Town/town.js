/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
const initialState = {
  loading: false,
  gas: [],
  name: ' ',
  error: ' ',
};

const baseUrl = 'http://api.openweathermap.org/data/2.5/air_pollution?';

const FETCH_TOWN_REQUEST = 'track-air-pollution-app/town/FETCH_TOWN_REQUEST';
const FETCH_TOWN_SUCCESS = 'track-air-pollution-app/town/FETCH_TOWN_SUCCESS';
const FETCH_TOWN_FAILURE = 'track-air-pollution-app/town/FETCH_TOWN_FAILURE';
const SET_COUNTRY_NAME = 'track-air-pollution-app/town/SET_COUNTRY_NAME ';

const fetchTownRequest = () => ({
  type: FETCH_TOWN_REQUEST,
});

const fetchTownSuccess = (payload) => ({
  type: FETCH_TOWN_SUCCESS,
  payload,
});

const fetchTownFailure = (payload) => ({
  type: FETCH_TOWN_FAILURE,
  payload,
});

const setCountryName = (payload) => ({
  type: SET_COUNTRY_NAME,
  payload,
});

const townReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOWN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        gas: [action.payload],
        error: ' ',
      };
    case FETCH_TOWN_FAILURE:
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
    default:
      return { ...state };
  }
};
export const fecthTown = (cord, name) => async (dispatch) => {
  try {
    dispatch(fetchTownRequest());
    dispatch(setCountryName(name));
    const response = await fetch(
      `${baseUrl}lat=${cord[0]}&lon=${cord[1]}&appid=9e828e2624199c7cbb9d9cde2d3b483c`
    );
    const data = await response.json();
    const result = {
      gasRate: data.list[0].components,
      rate: data.list[0].main.aqi,
    };
    dispatch(fetchTownSuccess(result));
  } catch {
    dispatch(fetchTownFailure('Data not available on server yet'));
  }
};

export default townReducer;
