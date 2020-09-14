import React, {useState} from "react";
import "./App.css";
import Geolocation from './Geolocation/Geolocation';
import Zomato from "./Zomato/Zomato";

 
function App() { 
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  
    return ( 
    <div className="App">
    <Zomato latitude={latitude} longitude={longitude}/>
    <Geolocation latitude={setLatitude} longitude={setLongitude}/>
    </div> 
    );
    };

 
export default App;

