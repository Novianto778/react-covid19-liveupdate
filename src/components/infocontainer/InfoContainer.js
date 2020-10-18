import React from "react";
import InfoItem from "../infoitem/InfoItem";
import { data } from "../../data";
import { Grid, Typography } from "@material-ui/core";

const InfoContainer = ({ data }) => {
  const card = data.card;
  return (
    <>
      <Grid container justify="center" className="section-title" >
        <Grid item>
          <Typography variant="h4">{data.title}</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        spacing={6}
        className="info-item-section"
      >
        {card.map((c, index) => {
          return <InfoItem card={c} key={index} />;
        })}
      </Grid>
    </>
  );
};

export default InfoContainer;
