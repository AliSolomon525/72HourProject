import React, { Component } from "react";
import { GeoProps, GeoState } from "../App";
   
  class Geolocation extends React.Component<GeoProps, GeoState> {
    constructor(props: GeoProps) {
      super(props);
    }
    componentDidMount() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
      });
    }
    render() { 
      return ( 
          <div></div>
       );
    }
  }
   
  export default Geolocation;