import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Toolbar, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import SecondaryToolbar from "../components/SecondaryToolbar";
import Navbar from "../components/Navbar";
import { useSession, getSession } from "next-auth/client";
import ButtonBase from "@material-ui/core/ButtonBase";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  secondMain: {
    marginLeft: theme.spacing(2),
    marginTop: 30,
    width: "72%",

    position: "relative",
    backgroundColor: "white",
  },
  lowerBox: {
    marginLeft: theme.spacing(2),
    marginTop: 30,
    width: "72%",

    position: "relative",
    backgroundColor: "white",
    height: 80,
    marginBottom: 10,
  },
  lowerLowerBox: {
    marginLeft: theme.spacing(2),
    marginTop: 30,
    width: "72%",
    fontSize: 11,

    position: "relative",

    height: 80,
    marginBottom: 10,
  },
}));

const EmptyCartPage = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.secondMain} spacing={2}>
        <Grid item xs={4}>
          <Image height={250} width={300} src="/cartImage.svg" alt="" />
        </Grid>
        <Grid item xs={8} style={{ paddingTop: 60 }}>
          <Typography style={{ fontWeight: "bold", fontSize: 21 }}>
            Your Amazon Cart is empty
          </Typography>
          <Typography
            gutterBottom
            style={{ fontSize: 13, color: "#00695f", marginBottom: 20 }}
          >
            Shop today's deals
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            href="/auth/credentials-signin"
            style={{ borderRadius: 10, marginRight: 10 }}
          >
            Sign in to your account
          </Button>
          <Button
            variant="contained"
            href="/auth/credentials-signin"
            color="inherit"
            size="small"
            style={{ borderRadius: 10 }}
          >
            Sign up now
          </Button>
        </Grid>
      </Grid>
      <Box className={classes.lowerBox} />
      <Box className={classes.lowerLowerBox}>
        The price and availability of items at Amazon.com are subject to change.
        The Cart is a temporary place to store a list of your items and reflects
        each item's most recent price. Shopping Cart Learn more Do you have a
        gift card or promotional code? We'll ask you to enter your claim code
        when it's time to pay.
      </Box>
    </>
  );
};

export default EmptyCartPage;
