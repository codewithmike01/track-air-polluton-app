/* eslint-disable react/no-array-index-key */
import pollution from './PollutionData.module.css';

export const spliter = (id) => {
  const name = id.split(':');
  const lat = name[0].split(',');
  return { name, lat };
};

export const gasValue = (storeTest, gas) => {
  const defaultData = {
    labels: ['co', 'no', 'no2', 'o3', 'pm2_5', 'pm10', 'so2'],
    datasets: [
      {
        label: 'Air Polution Data',
        data: [20, 30, 40],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  if (storeTest) {
    const gasNum = gas.map((item) => item.gasRate);
    const dataSet = gasNum[0];
    const dataShow = {
      labels: ['co', 'no', 'no2', 'o3', 'pm2_5', 'pm10', 'so2'],
      datasets: [
        {
          label: 'Air Polution Data',
          data: [
            dataSet.co,
            dataSet.no,
            dataSet.no2,
            dataSet.o3,
            dataSet.pm2_5,
            dataSet.pm10,
            dataSet.so2,
          ],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(134, 7, 151) ',
            'rgb(54, 141, 13) ',
            'rgb(23, 65, 3)',
            'rgb(173, 3, 3) ',
          ],
          hoverOffset: 4,
        },
      ],
    };
    return dataShow;
  }
  return defaultData;
};
const pollutionContent = (storeTest, gas) => {
  const pollutionData = storeTest
    ? gas.map((item, index) => (
      <div key={index} className={pollution.table_container}>
        <div className={pollution.gas_info}>
          {' '}
          <div className={pollution.space}> Carbon monoxide ( CO ) </div>
          {' '}
          {item.gasRate.co}
        </div>
        <div className={pollution.gas_info}>
          {' '}
          <div className={pollution.space}>
            {' '}
            Ammonia ( NH
            {' '}
            <sub>3</sub>
            {' '}
            )
            {' '}
          </div>
          {' '}
          {item.gasRate.nh3}
          {' '}
        </div>
        <div className={pollution.gas_info}>
          {' '}
          <div className={pollution.space}>
            {' '}
            Nitrogen monoxide ( NO )
          </div>
          {' '}
          {item.gasRate.no}
          {' '}
        </div>
        <div className={pollution.gas_info}>
          {' '}
          <div className={pollution.space}>
            {' '}
            Nitrogen dioxide ( NO
            {' '}
            <sub>2</sub>
            {' '}
            )
            {' '}
          </div>
          {' '}
          {item.gasRate.no2}
          {' '}
        </div>
        <div className={pollution.gas_info}>
          {' '}
          <div className={pollution.space}>
            {' '}
            Ozone ( O
            {' '}
            <sub>3</sub>
            {' '}
            )
            {' '}
          </div>
          {' '}
          {item.gasRate.pm2_5}
          {' '}
        </div>
        <div className={pollution.gas_info}>
          {' '}
          <div className={pollution.space}>
            {' '}
            Fine particles matter( PM2_5 )
          </div>
          {' '}
          {item.gasRate.pm10}
          {' '}
        </div>
        <div className={pollution.gas_info}>
          {' '}
          <div className={pollution.space}>
            {' '}
            Coarse particulate matter ( PM_10 )
          </div>
          {' '}
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
