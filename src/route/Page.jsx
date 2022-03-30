import {useEffect} from 'react';
import React from 'react';
import Navigation from '../components/Navigation';
import style from './Page.module.css';

function Page(){

  return (
    <div className={style.reset}>
      <Navigation />
      <div>Movie Collecter</div>
    </div>
  )
}

export default Page;