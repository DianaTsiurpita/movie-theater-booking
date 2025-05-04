import React from 'react';
import MovieList from './components/MovieList';
import movies from './data/movies';
import './index.css';

const App = () => {
    return (
      <div>
        {/* Основний контент (список фільмів) */}
        <MovieList movies={movies} />

        {/* Контактна інформація та місце знаходження */}
        <footer className="footer">
          <div className="footer-content">
            <p>Контакти:</p>
            <p>Телефон: +38 099 123 4567</p>
            <p>Email: info@kino.com</p>
            <p>Адреса: вул. Кінотеатральна, 45, Київ, Україна</p>
          </div>
        </footer>
      </div>
    );
};

export default App;
