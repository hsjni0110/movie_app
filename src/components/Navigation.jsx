import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import style from './Navigation.module.css';
function Navigation(){
  return(
    <div className={style.navigation_contaner}>
      <Link className={style.navigation_content} to="/home">
        <div>Home</div>
      </Link>
      <Link className={style.navigation_content} to="/">
        <div>About</div>
      </Link>
      <Link className={style.navigation_content} to="/">
        <div>Option</div>
      </Link>
      <Link className={style.navigation_content} to="/">
        <div>Comment</div>
      </Link>
    </div>
  )
}



export default Navigation;