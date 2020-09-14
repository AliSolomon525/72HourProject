import React, { useState } from "react";
import Styling from "./components/Styling";
import "./App.css";
import Geolocation from "./Geolocation/Geolocation";
import Zomato from "./Zomato/Zomato";
import Nasa from "./Nasa";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  return (
    <div className="App">
      <Zomato latitude={latitude} longitude={longitude} />
      <Geolocation latitude={setLatitude} longitude={setLongitude} />
      <Nasa latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;
