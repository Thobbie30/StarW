import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films');
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false)
      }

    };
    fetchMovies();
  }, []);


  return (
    <div className="movie-list">
      {loading && <h3>Please wait for a moment...</h3>}
      {movies.map(movie => (
        <MovieCard
          key={movie.episode_id}
          title={movie.title}
          releaseDate={movie.release_date}
          openingCrawl={movie.opening_crawl}
        />
      ))}
    </div>
  );
};

export default MovieList;