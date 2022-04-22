import ProductInCart from "./ProductInCart";
import React from "react";
import Card from "@material-ui/core/Card";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import theme from "../src/theme";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { store } from "../src/cartStore";

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
      display: "flex",
      flexDirection: "row",
      // flex: "1 0 auto",
    },
    cover: {
      width: 151,
    },
  })
);
const CartItemsList = () => {
  const classes = useStyles();
  const items = store((state) => state.products);
  return (
    <Card>
      <CardHeader
        style={{ borderBottom: "1px solid lightgray" }}
        title={<Typography variant="h5">Shopping Cart</Typography>}
        subheader={
          <ButtonBase disableRipple>
            <Typography style={{ fontSize: 13, color: "#00695f" }}>
              Deselect all items
            </Typography>
          </ButtonBase>
        }
      />
      <CardContent className={classes.content}>
        <List component="nav">
          {items.length &&
            items.map((item) => (
              <ListItem key={item.id}>
                <ProductInCart
                  id={item.id}
                  description={item.description}
                  quantity={item.quantity as number}
                  price={item.price}
                  image={item.image}
                />
              </ListItem>
            ))}
        </List>
      </CardContent>
      <CardActions style={{ borderTop: "1px solid lightgray" }}>
        <Box flexGrow={1} />
        <Box style={{ fontSize: 17, fontWeight: 450, color: "black" }}>
          {" "}
          Subtotal (1 item) : <span style={{ fontWeight: "bold" }}>$87.99</span>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CartItemsList;
