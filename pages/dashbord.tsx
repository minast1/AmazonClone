import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

const NextAuth = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Box my={2}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        {/*<Link href="/about" color="secondary">
            Go to the about page
          </Link> */}

        <p>am i at the bottom ...?</p>
      </Box>
    </Container>
  );
};

export default NextAuth;
