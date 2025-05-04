import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');

  // Функція для фільтрації фільмів
  const filterMovies = () => {
    return movies
      .filter(movie => 
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedGenre === 'all' || movie.genre === selectedGenre)
      );
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>Кіно</h1>
      </div>

      {/* Пошукове поле для фільтрації за назвою */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Пошук за назвою"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Селектор жанру */}
        <select 
          className="genre-select"
          onChange={(e) => setSelectedGenre(e.target.value)} 
          value={selectedGenre}
        >
          <option value="all">Всі жанри</option>
          <option value="кримінал">Кримінал</option>
          <option value="романтика">Романтика</option>
          <option value="комедія">Комедія</option>
          <option value="драма">Драма</option>
          <option value="жахи">Жахи</option>
        </select>
      </div>

      {/* Відображення карток фільмів після фільтрації */}
      <div className="movie-list">
        {filterMovies().map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
