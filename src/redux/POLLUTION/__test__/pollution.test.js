import store from '../../configureStore';
import { fetchPollutionSuccess } from '../pollution';

const mocked = {
  coord: {
    lon: 22,
    lat: 22,
  },
  list: [
    {
      main: {
        aqi: 5,
      },
      components: {
        co: 236.99,
        no: 0.03,
        no2: 0.1,
        o3: 90.84,
        so2: 0.08,
        pm2_5: 103.75,
        pm10: 678.32,
        nh3: 0.08,
      },
      dt: 1646902800,
    },
  ],
};

describe('Test Country reducer ', () => {
  test('Test Sucess', () => {
    store.dispatch(fetchPollutionSuccess(mocked));

    expect(store.getState().pollution.gas).toBeTruthy();
  });
});
