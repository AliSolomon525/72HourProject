import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
    });
  }

  render() {
    return (
      <div>
        <h4>geolocation</h4>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));