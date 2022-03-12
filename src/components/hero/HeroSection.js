import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fecthCountry } from '../../redux/Country/countries';
import { baseImgSrc } from '../globalUtilities/utility';
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

  const pollution = useSelector((state) => state.pollution.display);

  const countries = useSelector((state) => state.country_name);
  const { country } = countries;
  const headName = countries.regionName;

  const headNameFormat = headName.charAt(0).toUpperCase() + headName.slice(1);

  const regionSmallLetters = headName === 'americas' ? 'america' : headName;

  return (
    <div className={hero.container}>
      <div
        className={hero.split_section}
        style={pollution ? { display: 'none' } : { display: 'flex' }}
      >
        <div className={hero.left}>
          <img
            src={`${baseImgSrc}/${regionSmallLetters}/vector.svg`}
            alt="map"
            className={hero.image}
          />
        </div>
        <div className={hero.right}>
          <p data-testid="header_name">{headNameFormat}</p>
          <span>
            {' '}
            {country.length !== 0 ? country[0].length : ' '}
            {' '}
            countries
            {' '}
          </span>
          <form className={hero.form_style}>
            <select name="selected" ref={selectRef} onChange={setRefState}>
              <option>
                {headNameFormat}
                {' '}
                *
                {' '}
              </option>
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
              <button type="button" data-testid="button">
                {' '}
                Search Region
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
