import React, { useState, useEffect } from "react";
import GlobalIcon from "@material-ui/icons/Language";
import {
  Grid,
  Paper,
  Typography,
  FormControl,
  NativeSelect,
} from "@material-ui/core";
import CountUp from 'react-countup';
import { countries } from "../../api";

const Panel = ({ data: { confirmed, recovered, deaths }, handleCountryChange }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      const fetchCountries = await countries();
      setCountriesData(fetchCountries);
    };
    fetchCountriesData();
  }, [setCountriesData]);

  if (!confirmed) {
    return (
      <Paper style={{display: "absolute", top: 50, left: "50%", padding: "2rem 4rem"}}>
        <h1>Loading</h1>
      </Paper>
    );
  }
  return (
    <Paper
      md={8}
      xl={10}
      style={{ background: "#fff", width: "70%", margin: "0 auto" }}
      className="paper"
    >
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={8}
        style={{ margin: 0, padding: 0 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h6">Country</Typography>
                </Grid>
                <Grid item>
                  
                    <FormControl className="option">
                      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                        <option value="">Global</option>
                        {countriesData.map((country, index) => {
                          return (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          );
                        })}
                      </NativeSelect>
                    </FormControl>
                  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <GlobalIcon />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="caption">Confirmed</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6"><CountUp end={confirmed.value} separator="," duration={2.5}/></Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <GlobalIcon />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="caption">Recovered</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6"><CountUp end={recovered.value} separator="," duration={2.5}/></Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <GlobalIcon />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="caption">Deaths</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6"><CountUp end={deaths.value} separator="," duration={2.5}/></Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Panel;
