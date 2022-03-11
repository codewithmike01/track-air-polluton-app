import store from '../../configureStore';
import { fetchCountrySuccess } from '../countries';

const mocked = [
  {
    name: {
      common: 'Montenegro',
      official: 'Montenegro',
    },
    latlng: [23, 242],
    continents: ['Europe'],
  },
  {
    name: {
      common: 'Tokelau',
      official: 'Tokelau',
    },
    latlng: [23, 242],
    continents: ['Asia'],
  },
  {
    name: {
      common: 'Cuba',
      official: 'Republic of Cuba',
    },
    latlng: [23, 242],
    continents: ['Africa'],
  },
  {
    name: {
      common: 'Guadeloupe',
      official: 'Guadeloupe',
    },
    latlng: [23, 242],
    continents: ['Oceania'],
  },
  {
    name: {
      common: 'Guadeloupe',
      official: 'Guadeloupe',
    },
    latlng: [23, 242],
    continents: ['South America'],
  },
  {
    name: {
      common: 'Guadeloupe',
      official: 'Guadeloupe',
    },
    latlng: [23, 242],
    continents: ['North America'],
  },
];

describe('Test Country reducer ', () => {
  test('Test Sucess', () => {
    store.dispatch(fetchCountrySuccess(mocked));

    expect(store.getState().country_name.country[0]).toHaveLength(6);
  });
});
