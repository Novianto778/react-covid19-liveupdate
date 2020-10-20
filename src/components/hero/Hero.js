import React from "react";
import { Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import NextIcon from "@material-ui/icons/NavigateNext";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#eb0065",
    },
    secondary: {
      main: "#fff",
    },
  },
});

const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md">
              <h1>COVID-19 LIVE TRACKER</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                ad explicabo? In fugiat error placeat perferendis quasi? Nisi,
                magni nobis expedita, esse, odit voluptates aliquid neque rerum
                architecto natus atque?
              </p>

              <Button
                style={{ border: "2px solid #eb0065" }}
                variant="contained"
                color="primary"
                endIcon={<NextIcon />}
              >
                How To Protect
              </Button>
              <Button
                style={{ border: "2px solid #fff" }}
                variant="outlined"
                color="secondary"
                endIcon={<NextIcon />}
              >
                Find A Doctor
              </Button>
            </div>
            <div className="col-md hero-col">
              <img
                src={window.location.origin + '/img/hero.png'}
                alt="Covid Virus"
                className="img-fluid ml-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Hero;
