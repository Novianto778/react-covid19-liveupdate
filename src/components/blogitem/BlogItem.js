import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import {  ThemeProvider } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    maxWidth: 325,
  },
  media: {
    height: 140,
  },
});

const BlogItem = ({ data: { title, text, imgUrl, link }, theme }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} lg={4} md={12} className="blog-item">
        <Card className={classes.root}>
          <CardMedia className={classes.media} image={imgUrl} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
          <Typography
            component="h6"
            className="read-more"
          >
            <Link href={link} target="_blank">
              Read More
            </Link>
          </Typography>
        </Card>
      </Grid>
    </ThemeProvider>
  );
};

export default BlogItem;
