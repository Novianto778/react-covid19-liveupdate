import React from "react";
import { Grid, Paper } from "@material-ui/core";
import NextIcon from "@material-ui/icons/NavigateNext";

const FaqSideBar = ({ data:{title},className, handleActive, id  }) => {
  return (
    <>
      <Grid item onClick={() => handleActive(id)}>
        <Paper className={className} elevation={2}>
          {title}
          <span className="next-icon">
            <NextIcon />
          </span>
        </Paper>
      </Grid>
    </>
  );
};

export default FaqSideBar;
