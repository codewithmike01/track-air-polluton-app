const initialState = {
  loading: false,
  country: [],
  error: ' ',
  regionName: ' ',
};

const FETCH_COUNTRY_REQUEST = 'track-air-pollution-app/Country/FETCH_COUNTRY_REQUEST';
const FETCH_COUNTRY_SUCCESS = 'track-air-pollution-app/Country/FETCH_COUNTRY_SUCCESS';
const FETCH_COUNTRY_FAILURE = 'track-air-pollution-app/Country/ FETCH_COUNTRY_FAILURE';
const SET_REGION_NAME = 'track-air-pollution-app/Country/SET_REGION_NAME';

export const fetchCountryRequest = () => ({
  type: FETCH_COUNTRY_REQUEST,
});

export const fetchCountrySuccess = (payload) => ({
  type: FETCH_COUNTRY_SUCCESS,
  payload,
});

export const fetchCountryFailure = (payload) => ({
  type: FETCH_COUNTRY_FAILURE,
  payload,
});

export const setRegionName = (payload) => ({
  type: SET_REGION_NAME,
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
        ...state,
        loading: false,
        country: [action.payload],
        error: ' ',
      };
    case FETCH_COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
        country: [],
        error: action.payload,
      };
    case SET_REGION_NAME:
      return {
        ...state,
        regionName: action.payload,
      };
    default:
      return { ...state };
  }
};

export const fecthCountry = (region) => async (dispatch) => {
  try {
    dispatch(setRegionName(region));
    dispatch(fetchCountryRequest());
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`,
    );
    const data = await response.json();

    const result = data.map((item) => ({
      name: item.name.common,
      latlag: item.latlng,
      code: item.altSpellings[0].toLowerCase(),
      population: item.population,
    }));
    dispatch(fetchCountrySuccess(result));
  } catch {
    fetchCountryFailure('Can not reach server');
  }
};

export default country;
