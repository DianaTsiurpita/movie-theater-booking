import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="movie-card">
      <img src={`/images/${movie.poster}`} alt={movie.title} />
      <h3>{movie.title}</h3>

      <p className={`description ${showFullDescription ? 'expanded' : ''}`}>
        {movie.description}
      </p>

      <button className="toggle-btn" onClick={toggleDescription}>
        {showFullDescription ? 'Менше' : 'Більше'}
      </button>

      <div className="info">
        <p><strong>Жанр:</strong> {movie.genre}</p>
        <p><strong>Дата та час:</strong> {movie.dateTime}</p>
      </div>
    </div>
  );
};

export default MovieCard;
