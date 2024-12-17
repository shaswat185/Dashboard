import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Dashboard from "./Components/Dashboard/Dashboard";
// import LoginPage from "./Components/Auth/LoginPage";
import Navbar from "./Components/Navbar/Navbar";
import Vertical from "./Components/Navbar/Vertical";
import Task from "./Components/Task/Task";
import Calendar from "./Components/Calender/Calender";
import Report from "./Components/Report/Report";
import Document from "./Components/Document/Document";

function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar /> 
      <Vertical /> 
      
      <Routes>
        <Route path="/task" element={<Task />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calender" element={<Calendar/>}></Route>
        <Route path="/report" element={<Report/>}></Route>
        <Route path="/document" element={<Document/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
