/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
const initialState = {
  loading: false,
  country: [],
  error: ' ',
};

const FETCH_COUNTRY_REQUEST =
  'track-air-pollution-app/Country/FETCH_COUNTRY_REQUEST';
const FETCH_COUNTRY_SUCCESS =
  'track-air-pollution-app/Country/FETCH_COUNTRY_SUCCESS';
const FETCH_COUNTRY_FAILURE =
  'track-air-pollution-app/Country/ FETCH_COUNTRY_FAILURE';

const fetchCountryRequest = () => ({
  type: FETCH_COUNTRY_REQUEST,
});

const fetchCountrySuccess = (payload) => ({
  type: FETCH_COUNTRY_SUCCESS,
  payload,
});

const fetchCountryFailure = (payload) => ({
  type: FETCH_COUNTRY_FAILURE,
  payload,
});

const country = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRY_SUCCESS:
      return {
        loading: false,
        country: [action.payload],
        error: ' ',
      };
    case FETCH_COUNTRY_FAILURE:
      return {
        loading: false,
        country: [],
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export const fecthCountry =
  (region = 'europe') =>
  async (dispatch) => {
    try {
      dispatch(fetchCountryRequest());
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await response.json();
      // console.log(data);

      const result = data.map((item) => ({
        name: item.name.common,
        latlag: item.latlng,
      }));
      dispatch(fetchCountrySuccess(result));
    } catch {
      fetchCountryFailure('Can not reach server');
    }
  };

export default country;
