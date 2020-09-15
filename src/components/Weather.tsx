import { ToggleButton } from "@material-ui/lab";
import React from "react";
import { WeatherResponse } from "./WeatherInterface";

export interface WeatherProps {
  latitude: number;
  longitude: number;
}

export interface WeatherState {
  weatherInformation: WeatherResponse;
  Fahrenheit: boolean;
  temp: number | undefined;
}

class Weather extends React.Component<WeatherProps, WeatherState> {
  constructor(props: WeatherProps) {
    super(props);
    this.state = { weatherInformation: {}, Fahrenheit: true, temp: 0 };
  }

  toggle = () => {
    //this is a method
    if (this.state.Fahrenheit === true) {
      this.setState({ Fahrenheit: false });
      this.convertToCelsius(this.state.weatherInformation.main?.temp);
    } else {
      this.setState({ Fahrenheit: true });
      this.convertToFahrenheit(this.state.weatherInformation.main?.temp);
    }
  };

  convertToFahrenheit = (temp: number = 0) => {
    this.setState({ temp: ((temp - 273.15) * 9) / 5 + 32 });
  };

  convertToCelsius = (temp: number = 0) => {
    this.setState({ temp: temp - 273.15 });
  };

  componentDidUpdate(prevProps: WeatherProps) {
    if (this.props.latitude !== prevProps.latitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.latitude}&lon=${this.props.longitude}&appid=07372456674d98c91c5fa753abad7e94`
      )
        .then((res) => res.json())
        .then((json: WeatherResponse) => {
          //interface only lets it do the info or results from fetch
          console.log(json);
          this.setState({ weatherInformation: json, temp: json.main?.temp });
        });
    }
  }
  render() {
    return (
      <div>
        <ToggleButton onClick={this.toggle} value="bold" aria-label="bold">
          Click Me
        </ToggleButton>
        {this.state.weatherInformation.main !== undefined ? (
          this.state.temp
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Weather;
