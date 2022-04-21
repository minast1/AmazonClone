import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import React from "react";
import CartItemsList from "./CartItemsList";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  itemListRoot: {
    marginLeft: theme.spacing(2),
    marginTop: 30,
    border: "1px solid green",
    //width: "60%",
    //backgroundColor: "white",
  },
  rightSideRoot: {
    // marginLeft: theme.spacing(2),
    marginTop: 30,
    border: "1px solid blue",
    //width: "60%",
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

const CartWithItemsPage = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={5}>
        <Grid item md={9} className={classes.itemListRoot}>
          <CartItemsList />
        </Grid>
        <Grid item direction="column" xs className={classes.rightSideRoot}>
          <Grid item>
            <Box>Item 1</Box>
          </Grid>
          <Grid item>
            <Box>Item 2</Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CartWithItemsPage;
