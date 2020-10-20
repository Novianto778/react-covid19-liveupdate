import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import FaqSideBar from "../faqsidebar/FaqSideBar";
import { faq } from "../../data";

const Faq = () => {
  const [clickedIndex, setClickedIndex] = useState(0)

  const handleActive = (id) => {
    setClickedIndex(id)
  }

  return (
    <div className="faq">
      <h1 className="faq-title">FAQ</h1>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Grid container direction="column" spacing={3}>
              {faq.map((f, index) => {
                return (
                   <FaqSideBar
                    data={f}
                    key={index}
                    handleActive={handleActive}
                    className={ index === clickedIndex ? "faq-side-bar active" : "faq-side-bar"}
                    id={index}
                  /> 
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
