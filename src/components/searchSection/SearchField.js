/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';
import { NavLink, useParams } from 'react-router-dom';
import { color, override, baseImgSrc } from '../globalUtilities/utility';
import { displayCountryMap } from '../../redux/POLLUTION/pollution';
import { fecthCountry } from '../../redux/Country/countries';
import search from './Search.module.css';

const SearchField = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country_name);
  const { country, loading } = countries;
  const { id } = useParams();
  const namePass = id ? id.toLowerCase() : 'europe';

  useEffect(() => {
    if (country.length === 0) {
      dispatch(fecthCountry(namePass));
    }
  }, []);

  const setDisplay = () => {
    dispatch(displayCountryMap(true));
  };

  const countryField =
    country.length !== 0
      ? country[0].map((field, index) => (
          <NavLink
            to={`/pollution/${field.latlag}:${field.name}:${field.code}`}
            className={search.nav}
            key={index}
            onClick={setDisplay}
          >
            <div className={search.item_grid}>
              <div className={search.img_container}>
                <img
                  src={`${baseImgSrc}/${field.code}/vector.svg`}
                  alt="country code"
                />
              </div>
              <div>
                {' '}
                {field.name} <div> Population: {field.population}</div>{' '}
              </div>
            </div>
          </NavLink>
        ))
      : ' ';

  return (
    <div className={search.contianer}>
      <h4 className={search.padh4}> STATES BY COUNTRY </h4>
      <div className={search.grid}>{countryField}</div>
      <BounceLoader color={color} css={override} loading={loading} size={60} />
    </div>
  );
};

export default SearchField;
