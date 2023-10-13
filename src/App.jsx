import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./Loginaccount";
import Createaccount from "./Createaccount";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Createaccount' element={<Createaccount/>}/>
      </Routes>
    </Router>
  )
}


export default App;
