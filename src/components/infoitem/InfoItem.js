import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const InfoItem = ({ card }) => {
  return (
    <Grid item lg={4} md={6} xs={12} sm={10}>
      <Paper elevation={2} className="info-paper">
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={2}
          className="info-item"
        >
          <Grid item>
            <img src={card.imgUrl} width="60" />
          </Grid>
          <Grid item>
            <Typography className="title">{card.title}</Typography>
          </Grid>
          <Grid item lg={10}>
            <Typography align="center">{card.text}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default InfoItem;
