// src/pages/Booking.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CinemaHall = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { id } = useParams();

  const handleSeatClick = (seat) => {
    // Перевірка на наявність місця в вибраних
    setSelectedSeats(prev => prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]);
  };

  // Ініціалізація місць
  const seats = Array(20).fill(null).map((_, index) => `Місце ${index + 1}`);

  return (
    <div>
      <h2>Фільм ID: {id}</h2>
      <div className="cinema-hall">
        {seats.map(seat => (
          <button
            key={seat}
            onClick={() => handleSeatClick(seat)}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : 'available'}`}
            //disabled={selectedSeats.includes(seat)} // Заборона для вибраних місць

          >
            {seat}
          </button>
        ))}
      </div>
      <div>
        <h3>Вибрані місця:</h3>
        <ul>
          {selectedSeats.map(seat => (
            <li key={seat}>{seat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CinemaHall;
