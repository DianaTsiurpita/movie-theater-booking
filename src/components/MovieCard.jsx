import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="movie-card">
      <img src={`/images/${movie.poster}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <div className={`description ${isExpanded ? 'expanded' : ''}`}>
        {movie.description}
      </div>
      <button className="toggle-btn" onClick={toggleDescription}>
        {isExpanded ? 'Менше' : 'Більше'}
      </button>
      <div className="info">
        <strong>Жанр: </strong>{movie.genre}
      </div>
      
      {/* Додаємо відображення дати та часу сеансу */}
      <div className="session-info">
        <strong>Сеанс: </strong>{movie.dateTime}
      </div>
    </div>
  );
};

export default MovieCard;
