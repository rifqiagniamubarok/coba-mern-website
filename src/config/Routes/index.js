import React from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import { Login, MainApp, Register } from "../../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/*" element={<MainApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
