import React from "react";
import GlobalIcon from "@material-ui/icons/Language";
import { Grid, Paper, Typography } from "@material-ui/core";

const Panel = () => {
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
        style={{margin: 0, padding: 0}}

      >
        <Grid item xs={6} md={3}>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <GlobalIcon />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="caption">Country</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Country</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={3}>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <GlobalIcon />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="caption">Country</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Country</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={3}>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <GlobalIcon />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="caption">Country</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Country</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={3}>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <GlobalIcon />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="caption">Country</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Country</Typography>
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
