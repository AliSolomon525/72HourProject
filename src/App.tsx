import React from "react";
import "./App.css";
import Geolocation from './Geolocation/Geolocation';
import Zomato from "./Zomato/Zomato";

<<<<<<< HEAD
export interface GeoState {
  longitude: String,
  latitude: String,
  results: {},
  zomatoURL: String
=======


function App() {
  return <div className="App"></div>;
>>>>>>> 32db0eaa168ab29472b7ee69320be4859d25327b
}
export interface GeoProps {
  longitude: String,
  latitude: String,
  results: {},
  zomatoURL: String
}
 
class App extends React.Component<GeoProps, GeoState> {
  constructor(props: GeoProps) {
    super(props);
    this.state = { results: {}, latitude: new String, longitude: new String, zomatoURL: new String };
  }
  
  render() {
    const zomatoURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${this.state.latitude}&lon=${this.state.longitude}`;
    console.log(typeof this.props.latitude);
    console.log(typeof this.props.longitude);
    return ( <div className="App">
    <Zomato results={this.state.results} latitude={this.state.latitude} longitude={this.state.longitude} zomatoURL={this.state.zomatoURL}/>
    <Geolocation results={this.state.results} latitude={this.state.latitude} longitude={this.state.longitude} zomatoURL={this.state.zomatoURL}/>
  </div>  );
  }
}
 
export default App;

