import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosSettings, IoIosArrowBack } from 'react-icons/io';
import header from './Header.module.css';

const Header = () => (
  <div className={header.contanier}>
    <div className={header.left_side}>
      <NavLink to="/">
        <IoIosArrowBack className={header.left_side_size} />
      </NavLink>
      <span className={header.left_side_size}> 2022</span>
    </div>
    <h3>Most views</h3>

    <div className={header.right_side}>
      <FaMicrophone className={header.icon} />
      <IoIosSettings className={header.icon_gear} />
    </div>
  </div>
);

export default Header;
