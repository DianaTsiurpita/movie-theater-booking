import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking/:id" element={<Booking />} />
        </Routes>
        {/* Footer завжди внизу */}
        <footer className="footer">
          <div className="footer-content">
            <p>Контакти:</p>
            <p>Телефон: +38 099 123 4567</p>
            <p>Email: info@kino.com</p>
            <p>Адреса: вул. Кінотеатральна, 45, Київ, Україна</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
