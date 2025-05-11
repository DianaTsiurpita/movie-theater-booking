// src/pages/services/BookingService.js
const BOOKED_SEATS_KEY = "booked_seats";

// Отримання заброньованих місць для певного фільму
export const getBookedSeats = (movieId) => {
  const allBookings = JSON.parse(localStorage.getItem(BOOKED_SEATS_KEY)) || [];
  return allBookings
    .filter(booking => booking.movieId === movieId)
    .flatMap(booking => booking.seats);
};

// Збереження нового бронювання
export const saveBooking = (movieId, userDetails, selectedSeats) => {
  const allBookings = JSON.parse(localStorage.getItem(BOOKED_SEATS_KEY)) || [];
  allBookings.push({
    movieId,
    user: userDetails,
    seats: selectedSeats,
  });
  localStorage.setItem(BOOKED_SEATS_KEY, JSON.stringify(allBookings));
};
