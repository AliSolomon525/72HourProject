import React from "react";
import { WeatherResponse } from "./WeatherInterface";

export interface WeatherProps {
    coord: {lat: number; lon: number};
}

export interface WeatherState {
    weatherInformation: any;
}

class Weather extends React.Component<WeatherProps, WeatherState> {
    constructor(props: WeatherProps) {
        super(props);
        this.state = { weatherInformation: [] };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude:", position.coords.latitude);
            console.log("Longitude:", position.coords.longitude);
          });
        fetch(this.props.coord)
          .then((res) => res.json())
          .then((json: WeatherResponse) => {
            //interface only lets it do the info or results from fetch
            console.log(json);
            this.setState({ weatherInformation: json.coord });
          });
      }

    render() {
        return (  );
    }
}

export default Weather;
