import React from "react";
import RegisterPicker from "../components/Pickers/RegisterPicker";
import PickerList from "../components/Pickers/PickerList";

const Pickers = () => {
  return (
    <div>
      <h2>Pickers</h2>
      <RegisterPicker />
      <PickerList />
    </div>
  );
};

export default Pickers;
