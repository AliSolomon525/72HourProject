import React, { useState } from "react";
import "./App.css";
import Geolocation from "./Geolocation/Geolocation";
import Zomato from "./Zomato/Zomato";
import Nasa from "./Nasa";
import Weather from "./components/Weather";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ToggleButton } from "@material-ui/lab";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    maxHeight: 600,
  },
});

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Background = styled.div`
  background: linear-gradient(to bottom, white, #ele6e2);
`;

const Wrapper = styled.div`
  display: block;
  margin: auto;
  padding: 2em;
`;

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const classes = useStyles();

  // const handleFormat = (event, newFormats) => {
  //   setFormats(newFormats);

  return (
    <div className="App">
      <Geolocation latitude={setLatitude} longitude={setLongitude} />
      <Background>
        <Row>
          <Column>
            <Wrapper>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="NASA Image"
                    height="180"
                    image="data:image/jpeg;base64,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"
                    title="NASA Image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <b>NASA Image:</b>
                      <hr />
                      <Nasa latitude={latitude} longitude={longitude} />
                      Indianapolis, IN
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Wrapper>
          </Column>

          <Column>
            <Wrapper>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Current Weather"
                    height="180"
                    image="https://2.bp.blogspot.com/-7B1CWhwTflg/WZCFOTRfSAI/AAAAAAAAHA0/11OALHjFzGszm_EpK9C6FOQuiqcvd_6gACLcBGAs/s1600/indianapolis-1872529_960_720.jpg"
                    title="Current Weather"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <b>Current Weather:</b>
                      <hr />
                      <Weather latitude={latitude} longitude={longitude} />
                      {/* {this.state.Fahrenheit ? true : false} */}
                      <br />
                      <br />
                      Indianapolis, IN
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Wrapper>
          </Column>

          <Column>
            <Wrapper>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    style={{ textDecoration: "none" }}
                    component="img"
                    alt="Nearby Restaurants"
                    height="180"
                    image="https://www.tripsavvy.com/thmb/4GzJHDjaUwPfAYPr2yEwhFkEojU=/1800x670/filters:no_upscale():max_bytes(150000):strip_icc()/SkylineIndy_Main_Location_1-6dfcf05a6a9b490a94191695fc60de91.jpg"
                    title="Nearby Restaurants"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <b>Nearby Restaurants:</b>
                      <hr />
                      <Zomato latitude={latitude} longitude={longitude} />
                      <br />
                      Indianapolis, IN
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Wrapper>
          </Column>
        </Row>
      </Background>
    </div>
  );
}

export default App;
