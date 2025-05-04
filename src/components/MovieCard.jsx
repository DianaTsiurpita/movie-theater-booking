import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBooking = () => {
    navigate(`/booking/${movie.id}`);
  };

  return (
    <div className="movie-card">
      <img src={`/images/${movie.poster}`} alt={movie.title} />
      <h3>{movie.title}</h3>

      {/* Опис фільму */}
      <div className={`description ${isExpanded ? 'expanded' : ''}`}>
        {movie.description}
      </div>

      {/* Кнопка для розгортання/згортання опису */}
      <button className="toggle-btn" onClick={toggleDescription}>
        {isExpanded ? 'Менше' : 'Більше'}
      </button>

      {/* Відображення жанру фільму */}
      <div className="info">
        <strong>Жанр: </strong>{movie.genre}
      </div>

      {/* Відображення дати та часу сеансу */}
      <div className="session-info">
        <strong>Сеанс: </strong>{movie.dateTime}
      </div>

      {/* Кнопка для бронювання */}
      <button className="toggle-btn" onClick={handleBooking}>
        Забронювати
      </button>
    </div>
  );
};

export default MovieCard;
