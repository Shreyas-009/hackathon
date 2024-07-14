import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import Routes from "./routes";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes />
        <Toaster />
      </Router>
    </AuthProvider>
  );
};

export default App;
