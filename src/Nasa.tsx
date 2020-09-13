import React from "react";

export interface NASAState {
  NASAInfo: Blob;
}

class NASA extends React.Component<NASAState> {
  constructor(props: any) {
    super(props);
    this.state = { NASAInfo: new Blob() };
  }

  componentDidMount() {
    fetch(
      `https://api.nasa.gov/planetary/earth/imagery?lon=-85.863661&lat=39.9426726&date=2014-02-01&api_key=bUkM9xqZO6ZKwYGx3g7IeGRg9Yt1WCKjcPjOKwGc`
    )
      .then((res) => res.json())
      .then((data: Blob) => {
        console.log(data);
        this.setState({ NASAInfo: data });
      });
  }

  render() {
    console.log("testing");

    return (
      <div>
        <img src="{NASAInfo}" />
      </div>
    );
  }
}

export default NASA;
