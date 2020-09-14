import React from "react";
import { WeatherResponse } from "./WeatherInterface";

export interface WeatherProps {
    latitude: number;
    longitude: number;
}

export interface WeatherState {
    weatherInformation: any;
}

class Weather extends React.Component<WeatherProps, WeatherState> {
    constructor(props: WeatherProps) {
        super(props);
        this.state = { weatherInformation: {} };
    }

    componentDidUpdate(prevProps: WeatherProps) {
      if(this.props.latitude !== prevProps.latitude) {
      
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.latitude}&lon=${this.props.longitude}&appid=07372456674d98c91c5fa753abad7e94`)
          .then((res) => res.json())
          .then((json: WeatherResponse) => {
            //interface only lets it do the info or results from fetch
            console.log(json);
            this.setState({ weatherInformation: [] });
          });
      }

    render() {
        return ( <div></div> );
    }
}
}

export default Weather;
