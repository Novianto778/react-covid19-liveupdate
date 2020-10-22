import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Facebook, Instagram, YouTube } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Grid container direction="row" spacing={1}>
          <Grid item lg={3} md={6} xs={12} className="footer-item">
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Grid container direction="row" className="align-items-center">
                  <Grid item className="mr-2">
                    <img
                      src={window.location.origin + "/img/logo.png"}
                      alt="covid logo"
                      width="40"
                    />
                  </Grid>
                  <Grid item>
                    <h6>COVID-19</h6>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="p">
                  DesignMamba an online marketplace built to cope with promising
                  future
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* Second Column */}
          <Grid item lg={2} md={4} xs={9} className="footer-item">
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <h6>USEFUL LINKS</h6>
              </Grid>
              <Grid item>
                <Typography variant="p">Why?</Typography>
              </Grid>
              <Grid item>
                <Typography variant="p">About</Typography>
              </Grid>
              <Grid item>
                <Typography variant="p">Carrers</Typography>
              </Grid>
              <Grid item>
                <Typography variant="p">Blog</Typography>
              </Grid>
              <Grid item>
                <Typography variant="p">Contract</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* Third Column */}
          <Grid item lg={2} md={2} xs={3} className="footer-item">
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography>.</Typography>
              </Grid>
              <Grid item>
                <Typography variant="p">T&C</Typography>
              </Grid>
              <Grid item>
                <Typography variant="p">FAQ</Typography>
              </Grid>
              <Grid item>
                <Typography variant="p">Privacy Policy</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* Fourth Column */}
          <Grid item lg={3} md={6} xs={6} className="footer-item">
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <h6>CONTACT US</h6>
              </Grid>
              <Grid item>
                <Typography variant="p">Tel: +8801765668561</Typography>
              </Grid>
              <Grid item>
                <Typography variant="p">support@designmamba.com</Typography>
              </Grid>
              <Grid item>
                <h6>Location</h6>
                <Typography variant="p">Lalmatia, Dhaka-1207</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* fifth column */}
          <Grid item lg={2} md={6} xs={6} className="footer-item">
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <h6>KEEP IN TOUCH</h6>
              </Grid>
              <Grid container direction="row" spacing={2}>
                <Grid item>
                  <Facebook />
                </Grid>
                <Grid item>
                  <YouTube />
                </Grid>
                <Grid item>
                  <Instagram />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
      </div>
      <Typography variant="p" className="copyright d-block">© designmamba, All Rights Reserved</Typography>
    </div>
  );
};

export default Footer;
