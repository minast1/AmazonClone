import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import React from "react";
import CartItemsList from "./CartItemsList";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { CardHeader } from "@material-ui/core";
import Image from "next/image";
import Chip from "@material-ui/core/Chip";
import RatingContainer from "./RatingContainer";
import { store } from "../src/cartStore";
import { Product } from "../src/cartStore";
import { Prisma } from "@prisma/client";

const useStyles = makeStyles((theme) => ({
  itemListRoot: {
    marginLeft: theme.spacing(2),
    marginTop: 30,
    //border: "1px solid green",
  },
  rightSideRoot: {
    marginTop: 30,
    //border: "1px solid blue",
  },
}));

type appType = {
  items: any[];
};
const CartWithItemsPage = ({ items }: appType) => {
  const [checked, setChecked] = React.useState(true);
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    let total = items
      .map(({ price, quantity }) => Number(price) * quantity)
      .reduce((prev: number, current: number) => prev + current, 0);
    setTotal(total);
  }, [items]);

  //console.log(total);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={9} className={classes.itemListRoot}>
          <CartItemsList items={items} total={total} />
        </Grid>
        <Grid
          item
          container
          spacing={3}
          direction="column"
          xs
          className={classes.rightSideRoot}
        >
          <Grid item>
            <Card style={{ maxWidth: 295 }}>
              <CardContent>
                <Typography variant="h6">
                  Subtotal ({`${items.length} items`}) : {total}
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{
                        color: "#00695f",
                      }}
                      size="small"
                      checked={checked}
                      onChange={handleChange}
                      disableRipple
                      inputProps={{
                        "aria-label": "primary checkbox",
                      }}
                    />
                  }
                  label={
                    <Typography variant="caption" style={{ color: "black" }}>
                      This order contains a gift
                    </Typography>
                  }
                />

                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  fullWidth
                >
                  Proceed to checkout
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card style={{ maxWidth: 295 }}>
              <CardHeader
                subheader={
                  <Box
                    style={{ color: "black", fontWeight: "bold", fontSize: 13 }}
                  >
                    Sponsored Products related to items in your cart
                  </Box>
                }
              />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={5}>
                    <Image
                      width={100}
                      height={80}
                      alt=""
                      src="/testImg.jpg"
                      objectFit="cover"
                    />
                  </Grid>
                  <Grid item container direction="column" xs={7}>
                    <Grid item>
                      <Typography variant="caption">
                        42" Long Extension
                      </Typography>
                    </Grid>
                    <Grid item>{/*<RatingContainer rating={rating} />*/}</Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ marginBottom: 2 }}>
                        $117.49
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Chip
                        size="small"
                        variant="outlined"
                        label={
                          <Typography
                            variant="caption"
                            style={{ color: "black" }}
                          >
                            See all buying options
                          </Typography>
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CartWithItemsPage;
