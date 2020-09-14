import React from "react";
import Styling from "./components/Styling";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Styling />
      <Weather latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;
