import React from "react";
import Card from "@material-ui/core/Card";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import theme from "../src/theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 151,
    },
  })
);
const CartItemsList = () => {
  const classes = useStyles();
  return <Card></Card>;
};

export default CartItemsList;
