import React from 'react';
import {useState, useEffect} from 'react';
import Movie from '../components/Movies';
import style from './Home.module.css';
import Navigation from '../components/Navigation';


function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] =useState([]);

  const getMovies = async()=>{
    const jsons = await (
      await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
      )
    ).json();
    
    setMovies(jsons.data.movies);
    setLoading(false);
  };

  useEffect(()=>{
    getMovies();
  },[]);
  
  return (
    <div className={style.home_container}>
      <Navigation />
      
      <div className={style.page_container}>
        {loading ? (
          <h1 className={style.loading}>Loading...</h1>
        ) : (
          <div className={style.movie_container}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

//Loading중일 시 로딩 h태크, 아닐 시 movie의 각 속성들을 전달하여 Movie컴포넌트 생성
export default Home;