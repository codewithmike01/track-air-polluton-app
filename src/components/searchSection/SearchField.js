/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { fecthTown } from '../../redux/Town/town';
import search from './Search.module.css';

const SearchField = () => {
  const dispatch = useDispatch();

  const handleSetName = (e, name) => {
    dispatch(fecthTown(e.toLowerCase(), name));
  };

  const countries = useSelector((state) => state.country_name);
  const { country } = countries;

  const countryField =
    country.length !== 0
      ? country[0].map((field, index) => (
          <NavLink
            to="/town"
            onClick={() => {
              handleSetName(`${field.latlag}`, `${field.name}`);
            }}
            className={search.nav}
            key={index}
          >
            <div className={search.item_grid}>
              <div>Img</div>
              <div> {field.name} </div>
            </div>
          </NavLink>
        ))
      : ' ';

  return (
    <div className={search.contianer}>
      <h4 className={search.padh4}> STATES BY COUNTRY </h4>
      <div className={search.grid}>{countryField}</div>
    </div>
  );
};

// SearchField.propTypes = {
//   handleNewTitle: PropTypes.func.isRequired,
// };
export default SearchField;
