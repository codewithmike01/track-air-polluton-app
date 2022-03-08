/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import town from './Town.module.css';

const Town = () => {
  const airRiskRate = (rate) => {
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

  const gasVolume = useSelector((state) => state.pollution);
  const { gas } = gasVolume;

  const storeTest = gas.length !== 0;

  const airRate = storeTest ? airRiskRate(gas[0].rate) : ' ';

  const gasContent = storeTest
    ? gas.map((item, index) => (
        <div key={index} className={town.table_container}>
          <div className={town.gas_info}>
            {' '}
            <div className={town.space}> Carbon monoxide ( CO ) </div>{' '}
            {item.gasRate.co}{' '}
          </div>
          <div className={town.gas_info}>
            {' '}
            <div className={town.space}>
              {' '}
              Ammonia ( NH <sub>3</sub> ){' '}
            </div>{' '}
            {item.gasRate.nh3}{' '}
          </div>
          <div className={town.gas_info}>
            {' '}
            <div className={town.space}> Nitrogen monoxide ( NO )</div>{' '}
            {item.gasRate.no}{' '}
          </div>
          <div className={town.gas_info}>
            {' '}
            <div className={town.space}>
              {' '}
              Nitrogen dioxide ( NO <sub>2</sub> ){' '}
            </div>{' '}
            {item.gasRate.no2}{' '}
          </div>
          <div className={town.gas_info}>
            {' '}
            <div className={town.space}>
              {' '}
              Ozone ( O <sub>3</sub> ){' '}
            </div>{' '}
            {item.gasRate.pm2_5}{' '}
          </div>
          <div className={town.gas_info}>
            {' '}
            <div className={town.space}>
              {' '}
              Fine particles matter( PM2_5 )
            </div>{' '}
            {item.gasRate.pm10}{' '}
          </div>
          <div className={town.gas_info}>
            {' '}
            <div className={town.space}>
              {' '}
              Coarse particulate matter ( PM_10 )
            </div>{' '}
            {item.gasRate.so2}
          </div>
        </div>
      ))
    : 'Country data is not yet avialable on server !';
  return (
    <div className={town.contianer}>
      <div className={town.head_gas_info}>
        {' '}
        <span className={town.head_country}>{gasVolume.name}</span> air
        pollution ( μg/m3 ) stats - 2022
      </div>
      <div className={town.grid_column}>
        <div className={town.row_marker}>{gasContent}</div>
      </div>
      <div className={town.risk_rate}>
        Rate: {storeTest ? airRate : 'Unknown'}
      </div>
    </div>
  );
};

export default Town;
