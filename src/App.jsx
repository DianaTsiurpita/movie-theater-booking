// src/App.jsx
import React from 'react';
import MovieList from './components/MovieList';
import movies from './data/movies';
import './index.css';

const App = () => {
    return (
      <div>
        <MovieList movies={movies} />
      </div>
    );
};

export default App;
