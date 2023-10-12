import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

class Button extends React.Component {
  render() {
    return (
      
        <button
          className="h-10 px-6 font-semibold rounded-md bg-black text-white"
          type="submit"
        >
          Buy Now
        </button>
      
    );
  }
}

function Buttonku(){
  return(
    <button className="h-10 px-6 font-semibold rounded-md bg-slate-100 text white"
    type="submit">
      Buy Me
    </button>
  )
}



const ButtonRed = () => {
  
  return (
    
    <button className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white"
    type="submit">
      Red Button
      
    </button>
    
  );
  
}




function App() {
  

  return (
    
      <div className="flex justify-center bg-green-600 min-h-screen items-center">
        <div>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Buttonku></Buttonku>
          <ButtonRed></ButtonRed>
        </div>
      </div>
    
  );
}

export default App;
