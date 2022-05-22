import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { capitalize } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SecondaryToolbar from "../../components/SecondaryToolbar";
import Navbar from "../../components/Navbar";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { categories, Product, fetcher, Rating } from "../../src/constants";
import Image from "next/image";
import useSWR from "swr";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import RatingContainer from "../../components/RatingContainer";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Select from "@material-ui/core/Select";
import SelectBootstrapInput from "../../components/SelectBootstrapInput";
import MenuItem from "@material-ui/core/MenuItem";
import LockIcon from "@material-ui/icons/Lock";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { store } from "../../src/cartStore";
import { Cart } from "@prisma/client";

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    objectFit: "fill",
  },

  rightContainer: {
    // paddingLeft: theme.spacing(2),
    // borderLeft: '1px solid lightgray',
    //border: '1px solid red',
    display: "flex",
    justifyContent: "flex-end",
  },
  centerContainer: {
    // border: '1px solid red'
  },
  leftContainer: {
    //  paddingRight: 1,
    //border: '1px solid red'
  },
  cardRoot: {
    minWidth: 250,
    maxWidth: 260,
  },
  title: {
    fontSize: 13,
  },
  submit: {
    margin: theme.spacing(1, 0, 0),
    //width: 200,
    borderRadius: 15,
  },
}));

const Item = () => {
  const [session, loading] = useSession();
  const router = useRouter();
  const { pid, title } = router.query;
  const { data, error } = useSWR<Product>(
    `https://fakestoreapi.com/products/${pid}`,
    fetcher
  );

  const [quantity, setQuantity] = React.useState<number>(1);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuantity(Number(event.target.value));
  };
  const addToCart = (item: Product) => {
    if (session) {
      const uniqueItemId = { id: new Date().getTime() };
      const itemWithUniqueId = Object.assign(item, uniqueItemId);
      const updatedItem = { ...itemWithUniqueId, quantity: quantity };
      //update ui first ..... then

      // update db
      const data = { email: session.user?.email, products: updatedItem };
      const cart = fetch("/api/v2/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      router.push("/auth/credentials-signin");
    }
  };
  const classes = useStyles();

  return (
    <div>
      <header>
        <Navbar session={session} />
        <Toolbar />
        <SecondaryToolbar />
      </header>

      <main className={classes.root}>
        <Container maxWidth={false} style={{ paddingTop: 40 }}>
          <Grid container spacing={2}>
            <Grid item xs={5} className={classes.leftContainer}>
              <Box display="flex" alignItems="center" justifyContent="center">
                {data && (
                  <Image
                    height={500}
                    width={450}
                    className={classes.media}
                    alt={title as string}
                    src={data.image as string}
                  />
                )}
              </Box>
            </Grid>
            <Grid
              item
              xs={4}
              className={classes.centerContainer}
              container
              direction="column"
            >
              <Grid item style={{ paddingBottom: 5 }}>
                <Typography variant="h5" component="h3" noWrap={false}>
                  {title}
                </Typography>
                <a href="#" style={{ fontSize: 13, color: "#1769aa" }}>
                  Visit the Amazon Store
                </a>
                <Typography variant="body2" style={{ fontWeight: 700 }}>
                  {" "}
                  Platform:{" "}
                </Typography>

                {data && <RatingContainer rating={data.rating} />}
                <Divider />
              </Grid>
              <Grid item style={{ paddingBottom: 5 }}>
                <Box display="flex" flexDirection="row" alignItems="center">
                  Price:
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ paddingLeft: 4, color: "darkred" }}
                  >{`$${data?.price}`}</Typography>
                </Box>
                Ships from and sold by Amazon.com.
                <Divider />
              </Grid>
              <Grid item style={{ paddingBottom: 5 }}>
                <Typography gutterBottom variant="body2" component="h2">
                  {data?.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={3} className={classes.rightContainer}>
              <Card variant="outlined" className={classes.cardRoot}>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ paddingLeft: 4, color: "darkred" }}
                  >{`$${data?.price}`}</Typography>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    No import Fees Deposit & $35.82 Shipping to Ghana
                  </Typography>
                  <a
                    href="#"
                    className={classes.title}
                    style={{ color: "#1769aa" }}
                  >
                    Details
                  </a>
                  <Box display="flex" flexDirection="row" mt={2} mb={1}>
                    <LocationOnOutlinedIcon fontSize="small" />
                    <Typography
                      style={{ fontSize: 11, color: "#1769aa", paddingLeft: 5 }}
                    >
                      Deliver to Ghana
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    style={{ color: "#1b5e20" }}
                    gutterBottom
                  >
                    In Stock
                  </Typography>
                  <FormControl>
                    <InputLabel id="demo-customized-select-label">
                      Qty
                    </InputLabel>

                    <Select
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      value={quantity}
                      autoWidth={true}
                      defaultValue={1}
                      displayEmpty={true}
                      onChange={handleChange}
                      input={<SelectBootstrapInput />}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
                <CardActions
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Button
                    fullWidth
                    color="secondary"
                    onClick={() => {
                      addToCart(data as Product);
                      /*router.push({
                        pathname: "/cart",
                      });*/
                    }}
                    variant="contained"
                    disableElevation={false}
                    size="medium"
                    className={classes.submit}
                  >
                    Add to Cart
                  </Button>

                  <Button
                    fullWidth
                    color="primary"
                    href="#"
                    variant="contained"
                    disableElevation={false}
                    size="medium"
                    className={classes.submit}
                  >
                    Buy Now
                  </Button>
                </CardActions>
                <Box
                  display="flex"
                  flexDirection="row"
                  mb={1}
                  ml={1}
                  alignItems="center"
                >
                  <LockIcon fontSize="small" />
                  <Typography
                    style={{ fontSize: 13, color: "#1769aa", paddingLeft: 5 }}
                  >
                    Secure Transaction
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" ml={1}>
                  <Typography
                    style={{ fontSize: 12, color: "gray", paddingLeft: 5 }}
                  >
                    Ships from
                  </Typography>
                  <Typography
                    style={{ fontSize: 11, color: "black", paddingLeft: 10 }}
                  >
                    Amazon.com
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" mb={1} ml={1}>
                  <Typography
                    style={{ fontSize: 12, color: "gray", paddingLeft: 5 }}
                  >
                    Sold by
                  </Typography>
                  <Typography
                    style={{ fontSize: 11, color: "black", paddingLeft: 30 }}
                  >
                    Amazon.com
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

/*export async function getServerSideProps({req}) {

      const session  =  await getSession({req}) ;
    
      return {
        props : {
          session
        }
      }
}*/
export default Item;
