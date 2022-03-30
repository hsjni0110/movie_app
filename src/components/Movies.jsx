import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import style from './Movies.module.css';
function Movie({key, id, coverImg, title, summary, genres}){
  return(
    <div className={style.movie_container}>
      <img src={coverImg} alt={title} />
      <h2>
        <Link className={style.font} to={`/movie/${id}`}>{title}</Link>
      </h2>
    </div>
  )
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}


export default Movie;
//항상 큰거부터 하자, 계속 테스트하자..!