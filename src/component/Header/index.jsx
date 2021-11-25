import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.scss'
import logo from './../../assets/images/logo.png'


const Header = (props) => {
  const {btnLinkTo,btnText} = props;
  return (
    <nav className={styles.nav}>
       <a href='https://www.squadhelp.com/' target='_blank' rel='noreferrer'>
         <img src={logo} alt="logo" />
       </a>
        <Link className={styles.btn} to={btnLinkTo}>{btnText}</Link>
    </nav>
  );
}

export default Header;
