import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const PickerList = () => {
  const [pickers, setPickers] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchPickers = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/pickers`, {
          headers: {
            "x-auth-token": token,
          },
        });
        setPickers(response.data);
      } catch (error) {
        console.error("Error fetching pickers:", error);
      }
    };

    fetchPickers();
  }, [token]);

  return (
    <div>
      <h2>Pickers</h2>
      <ul>
        {pickers.map((picker) => (
          <li key={picker.id}>
            {picker.name} -{" "}
            {picker.serviceTypes?.join(", ") || "No services available"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PickerList;
