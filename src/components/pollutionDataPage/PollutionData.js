import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart, Tooltip, Title, ArcElement,
} from 'chart.js';
import { useSelector, useDispatch } from 'react-redux';
import pollutionContent, {
  airRiskRate,
  spliter,
  gasValue,
} from './pollutionUtilitiesContent';
import { color, override, baseImgSrc } from '../globalUtilities/utility';
import {
  fecthPollution,
  displayCountryMap,
} from '../../redux/POLLUTION/pollution';
import pollution from './PollutionData.module.css';

Chart.register(Tooltip, Title, ArcElement);

// Component PollutionData
const PollutionData = () => {
  const [display, setDisplay] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { name, lat } = spliter(id);
  const latlag = lat;
  useEffect(() => {
    dispatch(fecthPollution(latlag, name[1]));
    dispatch(displayCountryMap(true));
    window.scrollTo(0, 0);
  }, [id]);

  const pollutionDisplay = useSelector((state) => state.pollution.display);
  const loading = useSelector((state) => state.pollution.loading);
  const gasVolume = useSelector((state) => state.pollution);
  const { gas } = gasVolume;

  const storeTest = gas.length !== 0;
  const airRate = storeTest ? airRiskRate(gas[0].rate) : ' ';
  const gasContent = pollutionContent(storeTest, gas);
  const dataShow = gasValue(storeTest, gas);

  const handleClosePop = () => {
    setDisplay(false);
  };

  const handleOpenPop = () => {
    setDisplay(true);
  };

  return (
    <div className={pollution.contianer}>
      <div className={pollution.image_container}>
        <div
          className={pollution.img_map}
          style={pollutionDisplay ? { display: 'block ' } : { display: 'none' }}
        >
          <img
            src={`${baseImgSrc}/${name[2]}/vector.svg`}
            alt="map"
            className={pollution.image_map}
          />
        </div>
      </div>
      <div className={pollution.head_gas_info} data-testid="pollution_data">
        {' '}
        <span className={pollution.head_country}>{gasVolume.name}</span>
        {' '}
        air
        pollution ( μg/m3 ) stats - 2022
      </div>
      <BounceLoader color={color} css={override} loading={loading} size={60} />
      <div className={pollution.grid_column}>
        <div className={pollution.row_marker}>{gasContent}</div>
      </div>
      <div className={pollution.risk_rate}>
        Rate:
        {' '}
        {storeTest ? airRate : 'Unknown'}
        <button type="button" onClick={handleOpenPop}>
          {' '}
          Show Chart
          {' '}
        </button>
      </div>

      <div
        className={pollution.chart_area}
        style={display ? { display: 'flex' } : { display: 'none' }}
      >
        <button
          type="button"
          className={pollution.cancle}
          onClick={handleClosePop}
        >
          &times;
        </button>
        <div className={pollution.chart_info}>
          <Doughnut data={dataShow} className={pollution.size_chart} />
        </div>
      </div>
    </div>
  );
};

export default PollutionData;
