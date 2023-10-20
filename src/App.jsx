import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./Loginaccount";
import Createaccount from "./Createaccount";
import Register from "./form/Registermember";
import Perpustakaan from "./form/Formperpustakaan";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/perpustakaan' element={<Perpustakaan/>}/>
      </Routes>
    </Router>
  )
}


export default App;
