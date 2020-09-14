import React from "react";
//import {GeoState, GeoProps} from "../App";
export interface NASAState {
  NASAInfo: string;
}

export interface NASAProps {
  latitude: number;
  longitude: number;
}

class NASA extends React.Component<NASAProps, NASAState> {
  constructor(props: NASAProps) {
    super(props);
    this.state = { NASAInfo: "" };
  }
  componentDidUpdate(prevProps: NASAProps) {
    if (this.props.latitude !== prevProps.latitude) {
      fetch(
        `https://api.nasa.gov/planetary/earth/imagery?lon=${this.props.longitude}&lat=${this.props.latitude}&date=2014-02-01&api_key=bUkM9xqZO6ZKwYGx3g7IeGRg9Yt1WCKjcPjOKwGc`
      )
        .then((res) => res.blob())
        .then((data: Blob) => {
          console.log(data);
          this.setState({ NASAInfo: URL.createObjectURL(data) });
        });
    }
  }
  render() {
    console.log("testing");
    return (
      <div>
        <img src={this.state.NASAInfo} />
      </div>
    );
  }
}
export default NASA;
