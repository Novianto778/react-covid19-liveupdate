import React from "react";
import { Grid, Paper } from "@material-ui/core";
import PlusIcon from "@material-ui/icons/AddCircleOutline";
import MinusIcon from "@material-ui/icons/IndeterminateCheckBox";

const FaqAccordion = ({data:{question, answer} }) => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <Grid item>
      <Paper className="accordion-question" elevation={2}>
        {question}
        <span onClick={handleOpen}>{open ? <MinusIcon /> : <PlusIcon />}</span>
      </Paper>
      {open ? (
        <Grid item className="accordion-answer">
          {answer}
        </Grid>
      ) : (
        null
      )}
    </Grid>
  );
};

export default FaqAccordion;
