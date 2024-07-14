import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const CreateBooking = () => {
  const { register, handleSubmit } = useForm();
  const { token } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      await axios.post(`http://localhost:8080/api/bookings`, data, {
        headers: {
          "x-auth-token": token,
        },
      });
      toast.success("Booking created successfully!");
    } catch (err) {
      toast.error("Failed to create booking");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("pickerId")} placeholder="Picker ID" />
      <input {...register("userId")} placeholder="User ID" />
      <input {...register("serviceType")} placeholder="Service Type" />
      <input {...register("date")} placeholder="Date (YYYY-MM-DD)" />
      <input {...register("time")} placeholder="Time (HH:MM:SS)" />
      <button type="submit">Create Booking</button>
    </form>
  );
};

export default CreateBooking;
