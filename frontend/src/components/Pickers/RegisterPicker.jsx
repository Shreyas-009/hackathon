import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const RegisterPicker = () => {
  const { register, handleSubmit } = useForm();
  const { token } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      await axios.post(`http://localhost:8080/api/pickers`, data, {
        headers: {
          "x-auth-token": token,
        },
      });
      toast.success("Picker registered successfully!");
    } catch (err) {
      toast.error("Failed to register picker");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      <input
        {...register("serviceTypes")}
        placeholder="Service Types (comma separated)"
      />
      <input {...register("location")} placeholder="Location" />
      <input {...register("contactInfo")} placeholder="Contact Info" />
      <button type="submit">Register Picker</button>
    </form>
  );
};

export default RegisterPicker;
