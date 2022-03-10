/* eslint-disable indent */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-array-index-key */

import pollution from './PollutionData.module.css';

const pollutionContent = (storeTest, gas) => {
  const pollutionData = storeTest
    ? gas.map((item, index) => (
        <div key={index} className={pollution.table_container}>
          <div className={pollution.gas_info}>
            {' '}
            <div className={pollution.space}> Carbon monoxide ( CO ) </div>{' '}
            {item.gasRate.co}
          </div>
          <div className={pollution.gas_info}>
            {' '}
            <div className={pollution.space}>
              {' '}
              Ammonia ( NH <sub>3</sub> ){' '}
            </div>{' '}
            {item.gasRate.nh3}{' '}
          </div>
          <div className={pollution.gas_info}>
            {' '}
            <div className={pollution.space}>
              {' '}
              Nitrogen monoxide ( NO )
            </div>{' '}
            {item.gasRate.no}{' '}
          </div>
          <div className={pollution.gas_info}>
            {' '}
            <div className={pollution.space}>
              {' '}
              Nitrogen dioxide ( NO <sub>2</sub> ){' '}
            </div>{' '}
            {item.gasRate.no2}{' '}
          </div>
          <div className={pollution.gas_info}>
            {' '}
            <div className={pollution.space}>
              {' '}
              Ozone ( O <sub>3</sub> ){' '}
            </div>{' '}
            {item.gasRate.pm2_5}{' '}
          </div>
          <div className={pollution.gas_info}>
            {' '}
            <div className={pollution.space}>
              {' '}
              Fine particles matter( PM2_5 )
            </div>{' '}
            {item.gasRate.pm10}{' '}
          </div>
          <div className={pollution.gas_info}>
            {' '}
            <div className={pollution.space}>
              {' '}
              Coarse particulate matter ( PM_10 )
            </div>{' '}
            {item.gasRate.so2}
          </div>
        </div>
      ))
    : 'Country data is not yet avialable on server !';

  return pollutionData;
};

export const airRiskRate = (rate) => {
  switch (rate) {
    case 1:
      return 'Good';

    case 2:
      return 'Fair';
    case 3:
      return 'Moderate';

    case 4:
      return 'Poor';

    case 5:
      return 'Very Poor';

    default:
      return 'Unknown';
  }
};

export default pollutionContent;
