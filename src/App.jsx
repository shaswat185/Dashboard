import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "./App.css";

import Dashboard from "./Components/Dashboard/Dashboard";
// import LoginPage from "./Components/Auth/LoginPage";
import Navbar from "./Components/Navbar/Navbar";
import Vertical from "./Components/Navbar/Vertical";

function App() {
  return (
  <>
  
  <Navbar/>
    <Vertical/>
    <Dashboard/>
  </>
  );
}

export default App;
