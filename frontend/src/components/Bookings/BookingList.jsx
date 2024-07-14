import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/bookings`, {
          headers: {
            "x-auth-token": token,
          },
        });
        setBookings(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBookings();
  }, [token]);

  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.serviceType} - {booking.date} {booking.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
