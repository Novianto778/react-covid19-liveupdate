import React from "react";
import BlogItem from "../blogitem/BlogItem";
import { Grid, Button } from "@material-ui/core";
import { blog } from "../../data";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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

const Blog = () => {
  const [loaded, setLoaded] = React.useState(3);

  const handleLoad = () => {
    setLoaded(loaded + 3);
  };

  const handleLess = () => {
    setLoaded(3);
  };

  const loadedBlog = blog.slice(0, loaded);
  return (
    <div className="blog">
      <h1 className="blog-title">Blog</h1>
      <div className="container">
        <Grid container justify="center" spacing={4} className="blog-item">
          {loadedBlog.map((b, index) => {
            return <BlogItem key={index} data={b} theme={theme} />;
          })}
        </Grid>
      </div>
      <ThemeProvider theme={theme}>
        {loaded === blog.length ? (
          <Button
            variant="contained"
            color="primary"
            className="btn-loadmore d-block"
            onClick={handleLess}
          >
            Load Less
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            className="btn-loadmore d-block"
            onClick={handleLoad}
          >
            Load More
          </Button>
        )}
      </ThemeProvider>
    </div>
  );
};

export default Blog;
