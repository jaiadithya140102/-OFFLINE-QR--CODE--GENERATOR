import logo from './logo.svg';
import './App.css';
import QRCode from "react-qr-code";
import { useState } from 'react';
function App() {
  const [text,setText] = useState("");

  function handleChange(e){
    setText(e.target.value) 
  }
  return (
    <div className="App">
      <center>
      <h1>SATHYABAMA UNIVERSITY </h1>
      <h3>QR CODE GENERATOR</h3>
      <QRCode value = {text}/>
      <div className="input-here">
        <p>ENTER YOUR TEXT HERE:</p>
        <input type="text" value= {text} onChange={(e)=>{handleChange(e)}}/>      

           </div>
      </center>

      
    </div>
  );
}

export default App;
