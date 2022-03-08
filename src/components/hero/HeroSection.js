/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthCountry } from '../../redux/Country/countries';
import hero from './Hero.module.css';
import mapImage from '../../assets/testImage.jpg';

const HeroSection = () => {
  const [region, setRegion] = useState('Europe');
  const dispatch = useDispatch();
  const handleFetchCountry = (e) => {
    e.preventDefault();
    const newRegion = e.target.selected.value;
    setRegion(newRegion);
    dispatch(fecthCountry(newRegion.toLowerCase()));
  };
  const countries = useSelector((state) => state.country_name);
  const { country } = countries;

  return (
    <div className={hero.container}>
      <div className={hero.split_section}>
        <div className={hero.left}>
          <img src={mapImage} alt="map" className={hero.image} />
        </div>
        <div className={hero.right}>
          <p> {region}</p>
          <span>
            {' '}
            {country.length !== 0 ? country[0].length : ' '} countries{' '}
          </span>
          <form
            className={hero.form_style}
            onSubmit={(e) => handleFetchCountry(e)}
          >
            <select name="selected">
              <option value="Europe" defaultValue>
                {' '}
                Europe{' '}
              </option>
              <option value="Asia"> Asia</option>
              <option value="Oceania">Oceania </option>
              <option value="Americas"> Americas</option>
              <option value="Africa"> Africa</option>
            </select>
            <button type="submit"> Search Region</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
