/* eslint-disable react/jsx-indent */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fecthCountry } from '../../redux/Country/countries';
import hero from './Hero.module.css';

const HeroSection = () => {
  const selectRef = useRef();

  const [region, setRegion] = useState('Europe');

  const dispatch = useDispatch();

  const setRefState = () => {
    const newRegion = selectRef.current.value;
    setRegion(newRegion);
  };

  const handleFetchCountry = () => {
    const regionPass = region.toLowerCase();
    dispatch(fecthCountry(regionPass));
  };

  const countries = useSelector((state) => state.country_name);
  const { country } = countries;
  const headName = countries.regionName;

  const headNameFormat = headName.charAt(0).toUpperCase() + headName.slice(1);

  const imgSrc =
    'https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/';
  const regionSmallLetters = headName === 'americas' ? 'america' : headName;

  return (
    <div className={hero.container}>
      <div className={hero.split_section}>
        <div className={hero.left}>
          <img
            src={`${imgSrc}/${regionSmallLetters}/vector.svg`}
            alt="map"
            className={hero.image}
          />
        </div>
        <div className={hero.right}>
          <p>{headNameFormat}</p>
          <span>
            {' '}
            {country.length !== 0 ? country[0].length : ' '} countries{' '}
          </span>
          <form className={hero.form_style}>
            <select name="selected" ref={selectRef} onChange={setRefState}>
              <option>{headNameFormat}</option>
              <option value="Asia"> Asia</option>
              <option value="Oceania">Oceania </option>
              <option value="Europe"> Europe </option>
              <option value="Americas"> Americas</option>
              <option value="Africa"> Africa</option>
            </select>
            <NavLink
              to={`/country/${region}`}
              onClick={(e) => handleFetchCountry(e)}
            >
              <button type="button"> Search Region</button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
