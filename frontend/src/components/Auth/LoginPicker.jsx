import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginPicker = () => {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `https://rag-pickers-app.vercel.app/auth/login`,
        data
      );
      login(response.data.token);
      toast.success("Logged in successfully!");
    } catch (error) {
      setError("Invalid email or password");
      toast.error(error.response.data.message || "Invalid email or password");
    }
  };

  return (
    <div>
      <h2>Login Picker</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email:
          <input {...register("email")} required />
        </label>
        <label>
          Password:
          <input type="password" {...register("password")} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPicker;
