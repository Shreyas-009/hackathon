import React from "react";
import CreateBooking from "../components/Bookings/CreateBooking";
import BookingList from "../components/Bookings/BookingList";

const Bookings = () => {
  return (
    <div>
      <h2>Bookings</h2>
      <CreateBooking />
      <BookingList />
    </div>
  );
};

export default Bookings;
