<<<<<<< HEAD
import React, {useState} from "react";
=======
import React from "react";
import Styling from "./components/Styling";
>>>>>>> f27260bf5c59d692d84c828d1dbac5f2e5026f00
import "./App.css";
import Geolocation from './Geolocation/Geolocation';
import Zomato from "./Zomato/Zomato";

<<<<<<< HEAD
 
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

 
=======
function App() {
  return (
    <div className="App">
      <Styling />
    </div>
  );
}

>>>>>>> f27260bf5c59d692d84c828d1dbac5f2e5026f00
export default App;

