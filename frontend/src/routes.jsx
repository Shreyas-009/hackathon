import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pickers from "./pages/Pickers";
import Bookings from "./pages/Bookings";
import LoginPicker from "./components/Auth/LoginPicker";
import RegisterPicker from "./components/Auth/RegisterPicker";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pickers" element={<Pickers />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/login-picker" element={<LoginPicker />} />
      <Route path="/register-picker" element={<RegisterPicker />} />
    </Routes>
  );
};

export default AppRoutes;
