import React from 'react'
import '../styles/MovieCard.css'

const MovieCard = ({title, releaseDate, openingCrawl }) => {
    return (
      <div className="movie-card">
        <h2 className="movie-card-title">{title}</h2>
        <p className="movie-card-release-date">Release Date: {releaseDate}</p>
        <p className="movie-card-opening-crawl">{openingCrawl}</p>
        <button className='movie-card-more-info' type="button" onclick="showMoreInfo()">More info</button>

      </div>
    );
  };

export default MovieCard;