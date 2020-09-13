import React from "react";

export interface NASAProps {
  url: string;
}

export interface NASAState {
  NASAInfo: Blob;
}

class NASA extends React.Component<NASAProps, NASAState> {
  constructor(props: NASAProps) {
    super(props);
    this.state = { NASAInfo: new Blob() };
  }

  componentDidMount() {
    fetch(
      `https://api.nasa.gov/planetary/earth/imagery?lon=-85.863661&lat=39.9426726&date=2014-02-01&api_key=bUkM9xqZO6ZKwYGx3g7IeGRg9Yt1WCKjcPjOKwGc`
    )
      .then((res) => res.json())
      .then((json: Blob) => {
        console.log(json);
        this.setState({ NASAInfo: json });
      });
  }

  render() {
    console.log("testing");
    return <div>Testing NASAInfo</div>;
  }
}

export default NASA;
