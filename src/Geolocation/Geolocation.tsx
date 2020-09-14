import React, { Component } from "react";
   
export interface GeoState {
  longitude: any,
  latitude: any,
}
export interface GeoProps {
  longitude: any,
  latitude: any,
}

  class Geolocation extends React.Component<GeoProps, GeoState> {
    constructor(props: GeoProps) {
      super(props);
    }
    componentDidMount() {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
        this.props.latitude(position.coords.latitude);
        this.props.longitude(position.coords.longitude);
      });
    }
    render() { 
      return ( 
          <div></div>
       );
    }
  }
   
  export default Geolocation;
