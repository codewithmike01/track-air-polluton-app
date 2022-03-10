import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosSettings, IoIosArrowBack } from 'react-icons/io';
import header from './Header.module.css';
import { displayCountryMap } from '../../redux/POLLUTION/pollution';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setDisplay = () => {
    navigate(-1);
    dispatch(displayCountryMap(false));
  };

  return (
    <div className={header.contanier}>
      <div className={header.left_side}>
        <button
          type="button"
          onClick={setDisplay}
          className={header.button_style}
        >
          <IoIosArrowBack className={header.left_side_size} />
        </button>
        <span className={header.left_side_size} data-testid="year">
          {' '}
          2022
        </span>
      </div>
      <h3>Most views</h3>

      <div className={header.right_side}>
        <FaMicrophone className={header.icon} />
        <IoIosSettings className={header.icon_gear} />
      </div>
    </div>
  );
};

// goBack() - (function) Equivalent to go(-1)

export default Header;
