// src/pages/Home.jsx
import React from 'react';
import MovieList from '../components/MovieList'; // Імпортуємо MovieList
import movies from '../data/movies'; // Імпортуємо список фільмів

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Список фільмів</h1>
      <MovieList movies={movies} /> {/* Передаємо список фільмів в компонент MovieList */}
    </div>
  );
};

export default Home;
