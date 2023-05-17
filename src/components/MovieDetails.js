import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/${id}`).then((response) => {
      setMovie(response.data);
    });
  }, [id]);

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Release date: {movie.release_date}</p>
      <p>{movie.opening_crawl}</p>
      <Link to="/">Back to list</Link>
    </div>
  );
}

export default MovieDetails;
