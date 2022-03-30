import {useEffect} from 'react';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import React from 'react';

function Detail(){
  const [movie,setMovie] = useState([]);
  const {id} = useParams();
  const getMovie = async()=>{
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  console.log(movie);
  useEffect(() => {
    getMovie();
  },[]);
  return (
    <div>
      <img src={movie.background_image} alt={movie.id} />
      <img src={movie.large_cover_image} alt={movie.id} />
      <div>
        <div>{movie.title}</div>
        <div>Like Count : {movie.like_count}</div>
        <div></div>
      </div>
    </div>
  )
}

export default Detail;