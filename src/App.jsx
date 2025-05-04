// src/App.jsx
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import movies from './data/movies';
import './index.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <header className="app-header">
        <input
          type="text"
          placeholder="Пошук фільмів..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </header>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
