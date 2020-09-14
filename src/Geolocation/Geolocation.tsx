import React, { Component } from "react";
<<<<<<< HEAD
   
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
=======
// import { render } from "react-dom";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       console.log("Latitude:", position.coords.latitude);
//       console.log("Longitude:", position.coords.longitude);
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h4>geolocation</h4>
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById("root"));
>>>>>>> f27260bf5c59d692d84c828d1dbac5f2e5026f00
