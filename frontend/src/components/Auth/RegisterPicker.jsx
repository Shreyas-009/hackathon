import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterPicker = () => {
  const { token } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/pickers`,
        data,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      if (response && response.data) {
        toast.success("Picker registered successfully!");
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (error) {
      console.error("Error registering picker:", error);
      setError(error.response?.data?.message || "Error registering picker");
      toast.error(error.response?.data?.message || "Error registering picker");
    }
  };

  return (
    <div>
      <h2>Register Picker</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input {...register("name")} required />
        </label>
        <label>
          Service Types (comma separated):
          <input {...register("serviceTypes")} required />
        </label>
        <label>
          Location:
          <input {...register("location")} required />
        </label>
        <label>
          Contact Info:
          <input {...register("contactInfo")} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPicker;
