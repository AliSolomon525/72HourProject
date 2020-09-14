import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import WeatherProps from "./Weather";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    maxHeight: 450,
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

// export interface TemperatureState {
//   Fahrenheit: boolean;
// }

// function toggle(e) {
//   e.preventDefault();
//   if (this.state.Fahrenheit === true) {
//     this.setState.Fahrenheit(false);
//   } else {
//     this.setState.Fahreheit(true);
//   }

const Cards = (props) => {
  const classes = useStyles();

  return (
    <>
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
                    image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASUAAACsCAMAAAAKcUrhAAABblBMVEUAEmb///8AEmj///4AEmMAAF8AAFfv7/lLWZQCEWsBEGgAEGUAFV/BAAGtscl7e3uqscYAAFsoM30BEl9gZW/r8foIGGCZpL/4+Pjr6u7//P9ubm7///y+AAAABV36//+sAADHAAC3AAAAAFL///YAAFSnAAAAAE6yAAD2//zf398AAGO5ubkBD238//L//PT/4NwAAEWSkpKEhIR+f3hdYWZLVIpNV51GTpZJWZhcaaCcnJyqqqphZHfP0c8IGlknNXaYoMOzudg0OWZfZ5PY3fng5/nT3e8sNGsYJGtsdaPEzuhQV4V+hq49SHX/8O/uvrjTjIa1W1i7Oji7IiC5LyrJcHHhqaW+Nzv20syxTUulCBvKExr75NjrpJrGVFLHX2j6ysfMhoDPfoTMVV77j4n/2+D/4NPVQ0PCdW3fr6irKCzblpvMTky1KjP2u7mbNDzUpJi9DyvGbHbYWE9ycF4bJngAADwWIVdGS1Xuo2GiAAANOElEQVR4nO2dj3/TNhqHLdtNsR23eKat0eQocdzEprhOtxs72IArsPY2BklHaSmslI7dOEbZ7na73e6/v1dO6vxooGIDObvo+yGhTQx++/TVq1fSK0WZn5//8MP5P3106fKZjy+fEa7Llz7+85yHvVO1cOby5UuXCjDw8uUzV5R5hC5cQOhcs1JZqdQrg3LYI3+qDDw5r3gaeLsy5sL+a/0L1yrNJXS68KxbqdSP7Rt3Q457jf5Ir7Z+6P8pvQeUPvjk03l0tWSaiaEYomWWjdISwqdjmi2biWUKtw8sVC2gdOEThC5eO7esKImim6JluImzhMipkMjComUopiHcQMtS9D6luuuarquLluEanJSu66qrK8INdEF/gRY3/+nF99G5kqInyjAlRYQW1RIPJQS+ZOrHlIRYdiyd+RJC16556KpjKomqq6LVpaRxUCqbhnjzMlkZJaZzjuqqithfEpNaZi2OhxLEJV1XhRuoS0ocOklJlZROSFLikaTEI0mJR5ISjyQlHklKPJKUeCQp8UhS4pGkxCNJiUeSEo8kJR5JSjySlHgkKfFIUuKRpMQjSYlHkhKPJCUeSUo8kpR4JCnxSFLikaTEI0mJR5ISjyQlHklKPJKUeCQp8UhS4pGkxCNJiUeSEo8mgpLJuXcAKGX13sINnAhKiaI7S5Rjh8XsoqnriSncwImgpC66zjo9vcWRhUXDXXSF2zcZlMwyUOJqcWVTdaeTkqUkllO6EaanQtIWbtYrRjKdcclKmrc+oyFHXPLw0uLMlFKa+fwspWF6+l5L7KVo49aaBf9GLKmiKKlsyxm7k2o0b23QMAwJByUUhpSeba4Yehk6RnEqjJLapaSapfVT6QxJQ5t/XVHK7jRQAkyqqSrqyvINijn2NQ/Iixe+dEy3LMTMroqipKumYZjGTPk2CukbOlNI6BVHnQ5KhgkpwOebhBCO3m1ImIT0C8cQYWZubUGUTMPU3fptGiL0xpQwiReulCwRdvasLa7FKQAJYUo4OrchaavgTav0yxlxmIYplRTXUESMACzT1a3mHBvhkkFPoux7NqCjGvwNjzimPfehefgKNQTvLNxcUV3DEvQ7HaIEI25dBCXwJL1+Z2QaQNOyBwUmiIIwe2DM8PRQDV2+6VQU8/+akmIZM3dH+jbouwhLhzCN47DdbrVBkJBnbMZ1g3RuOdF1IdMoRVFSkspmPOJK8C2lMQzo2p2tr+5tg+6/3Nl9Fmpa17niEVb0ykxZF5Jc6tZJSta7F7S39RN9G2thHkk7X1UDP/BtkB9Uo+jBUStMIT7hkTlfQjY/dxVDEWGuZQ5QWlb0xNIF3Nas3KQk1E5QIu3dB4FdA/l+RsmHL6PGTiuNR8MS8ghdahoCjGX2mmafUnPGWZlxZt69VpZvkxDR4SYE+eXew6ofZJ6U+RIDxUgFj4481L28TxbjVfqeEGvZTZw+pVlxGmo+GMUx9uL0cbVm+10+vv31/aBW66EKgoN9AukAhhSgj5YgfF6YwRvHlN7nOU/r7ejEJDeASnciPwpyH3oJzHKPiuyf9kLIpPBQesWzOvW2dL5PiSUsWjdv6Sr/YuCr17yFRi5Er7puSBqEZo+0D6pAI+cSbO03asfMIFTZjU7YzTpH/vGp9xo1fIzGX3P8atb/DlAiojT0gxLov1bTJ4zRcRuz7WgvPMijE2uBfuPQo7EWxkOMNSHWkiFKAj14QIQNzL6JICIBpB4Y/4cU7Ua5Y0GICvwXLS+mJC7AyGFKxYjAsG23YUMKYEOH1gUTbCHcahxHbz/7Ex2033Au6m0JWl3hlDQat7ZtxidgpLI0IHoWY3Lg51GJpZm1xlEoroMZNnESKJEdxiETNC/mUQ/SGKOjiPmRnz1139oPcSHuNAEtjpK9Rr83A6eCPPJpCJT2opo9EMFtu7ozvZQgU7IjO+/dbKAUHWoeRunBwKtZgNrep9NKiexHMG6rdZsVNDgYlNzP1sPDo4i1w6DXGNk1W286tfmWTJwASrsQuVlnz5TFan8HBiMUxXuRXevLD2r+A29qKX0LPVjQqPYUVBuNDsUsMJH78GoU9d7Yhk6wuveGawlvycTiKe1vQ/f19d9ardaz1nfw3Npved2hiNbqCl7/rnX4d9YWd6eV0l42FdB4mhLajc3wPNCu2EQl5J2H9yKWDTyfVkrfB6y7D4J7LYTjGIMQ6Q1DCGHfYkrTrYbNpuZqD6c1Lm2xxLEGEB7tYhipsUWUHiWNlaIwB2sdsKwcYNZetIswcQIoPbVZTlljk5I7bfCmGA1SojFJO9tstJvll4+mldKOH7HRW8DyyReHbdKnhMCVSNraaUDcqmUsg+1WESZOAqUgqmUzAix/jI48iM/Hq1AU43DvIUs6eyOV6aX0TWQfQwCPil62ME2zxW94wt7jaj7GY6sGjwqZPZkASkd9Smz43+ggzNbq2FoloumLKKj1Kdk/tIuYKpwASp3Bob/PRrQ4zkoEgFQcPg2O36pBFxccTGu+tMfmJPuLJ9+GlHkRiiElIJQcRrWoTyn6ppBZ5wmglL5gSWW+9gZjEMyqKMKYYkgq2/dzSuBw1U4hJk4ApXAn6FOyG62YzbThdjsljBJ5nrfGWmA39qd2funHKps76qF4Ah0bpVr76T8OCUsI4k7eGGt+8DKdVkq4vc2murtJUbS7irCHWMVA9Yj1dbS93fMlSKmqu8WsokwAJUT+GWTLuH7W4CDfTh9X2QJm42UrxDh9fhyybPteqk2rL4W0/SIbf7Ce/glkAO3n1WzW0vZfdMIYd6JejUUt2o05dhu+A00CJYx3fTbYheBUPUKrne1ssjub7a7upHH7p2ydCaA9aEMeVYSJE0Aphl7/IMjWB2qNlrcFjgSI7GwO3A8e7JF/BRmloHHIqnOKMHECKLF6itY2oxTYD58dBL28oFsNV6s9etzJZilr0VZIB+uXRBo4SCkkgmqCRkskY/JjI8sFfgZakZ9NEDAyrHzQb/z8NWuO0ZM07lNixarCqj8I0QYrc0Qtww+FYKJhSrzdiJVSBINLuVm1STajwtrbcC0Fo6QRUZgwmh1qcYLuSwZ+QEYpJunjCBgF3TLBfrFXBghQ+Q9PTAaw2iUh5pIwzH1J+7eIO+Z37pd6xdnkNiGdbdbRZVE7H5MwZEE215uOFumOVsW9Wy3kvjR3Yw50VoDmZr00/yFptpEQHnsHQa/8NG93Pssufb9xhEchQV5Ob4uwFaydOzu3dEzp6tqKUy85JQFaWx9T741JuvuomhegMkUROFdUfdJikLQRSvHG2lpThLWOU1r+pV8Vn6iuqQr40FElaW709w5gFpYIWYWGp7W3tocwsUXvrw4xdIJ4tNpklX6xkgj5wFRV0bPPSO1SKplsE4qAz9JUlJkr4Dld58iK3UHdSIzbnZ1HVdatQUoQ+dHLo5Y2XJqLSdjdB3bbSdiGPgHmFvW5lkZznfVR4+IkIe2977d2QFu7e2kankhPWODXNDz7a8UQY21he8ANs7mJx3Xl2QI46/FYGCJsl9OJwme29zAl9Nay66oF7PwSuW9XrdydxSdKv7MGiHOhrGcbuSZkE5gELdUTd9EUs/OrGEqWpahK/dYChoRtdPjKtlnm9ejs0IpRjKGGkYdu1IGQawrZCl4QJVV1dcOo30HYG3WmbslJT1rWKEdaJSuiR585pq4biai92EVRco3E+M8SxpBcDg3HtCFqrN4kb5X5dRht/rqSlOG/sITsDC32zByruQ6UKO+gtYfLA0g3HZEHDBVLyTDW7lAaZiF6dKPTK4RZNvnZoiP0aKFiKZmG2ry1wPIh/sE9JOpnl1cSU+QxUcVSgvhrlO5uQEe3Go7dDX+yyUFycKdpKeYU+ZJeVgzVqZylGsTw0yllI5PNL51EL5eFnu1ZLKXuWVVm/dYG1+wfBG+6VJlho5LpOPGsK9WwdFdXE8ddX+CZU/Nu321WEtdlAU2clUVT6skqJ/UljlM9tYXlGUMX7EdME0FJLRslPkrXrammxHXasJadyTzdlHhPrpaUpC+9WtKXeCQp8UieqM8jSYlHkhKPJCUeSUo8kpR4JCnxSFLikaTEI0mJR5ISjyQlHklKPJKUeCQp8UhS4pGkxCNJiUeSEo8kJR5JSjySlHgkKfFIUuKRpMQjSYlHkhKPJCUeSUo8kpR4JCnxSFLikaTEI0mJR5ISjyQlHv1xKJ2/IPbUhUH9YSh9+uEn85LSq9Sj5IE3Xbx2biZRdVMd+nTQ7mXHf43Ta94ac50y5nJDN2aW0OmfGUgWyomhqObvuP1vss9SDYN9Rur5DxC6dvHccqIv6qZ4uXppiWN/XLhw3dRdwCRYEKotnZ2ZM3/xwvve1WVDLyt6eVCLmcpupvI4veatMdeNu1p1leWl09sb2/llQkD4Pbf/bQbm0fvaRQ9dXXOW60I+wHZEJWdtnefcvo16yXEKMBBuuvyL8tEHmf7LDvc6OzdG+clfb/TWuOvGXg7fX0vPn67Z7uFjv+X2c6de9xoDs+//B/dP3iJ8o7VrAAAAAElFTkSuQmCC"
                    title="NASA Image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <b>NASA Image:</b>
                      <p>PLACEHOLDER</p>
                      <br /> Indianapolis, IN
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
                      {/* {this.state.Fahrenheit ? true : false}
                      <Button onClick={toggle}>Toggle Button</Button> */}
                      <p>PLACEHOLDER</p>
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
                      <p>PLACEHOLDER</p>
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
    </>
  );
};

export default Cards;
