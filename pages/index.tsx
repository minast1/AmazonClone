import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Divider,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import SecondaryToolbar from "../components/SecondaryToolbar";
import Navbar from "../components/Navbar";
import { useSession, getSession } from "next-auth/client";
import CustomCarousel from "../components/CustomCarousel";
import ItemContainer from "../components/ItemContainer";
import item1 from "../public/item1.jpg";
import item3 from "../public/item3.jpg";
import item6 from "../public/item6.jpg";
import item7 from "../public/item7.jpg";
import item2 from "../public/item2.jpg";
import item9 from "../public/item9.jpg";
import item10 from "../public/item10.jpg";
import mini1 from "../public/mini1.jpg";
import image14 from "../public/image14.jpg";
import mini2 from "../public/mini2.jpg";
import mini3 from "../public/mini3.jpg";
import mini4 from "../public/mini4.jpg";
import ItemWithButtonContainer from "../components/ItemWithButtonContainer";
import ImageItemContainer from "../components/ImageItemContainer";
import ItemGridContainer from "../components/ItemGridContainer";
import ButtonBase from "@material-ui/core/ButtonBase";
import LoadingState from "../components/LoadingState";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: 'yellow'
    //backgroundColor: '#e8eaf6',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  gridContainer: {
    position: "absolute",
    bottom: -115,
    padding: theme.spacing(2),
  },
  carouselContainer: {
    position: "relative",
  },
  secondMain: {
    paddingLeft: theme.spacing(2),
    paddingTop: 110,
    position: "relative",
    paddingRight: 17,
  },
  submit: {
    margin: theme.spacing(0.5, 0, 0.5),
    width: 240,
  },
  lowerMain: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 40,
    paddingBottom: 20,
  },
}));

const Home = () => {
  const [session, loading] = useSession();
  const classes = useStyles();
  return loading ? (
    <div>
      <LoadingState />
    </div>
  ) : (
    <div>
      <header>
        <Navbar session={session} />
        <Toolbar />
        <SecondaryToolbar />
      </header>

      <main className={classes.root}>
        <Container
          className={classes.carouselContainer}
          disableGutters={true}
          maxWidth={false}
        >
          <CustomCarousel />

          <Grid
            container
            direction="row"
            spacing={3}
            className={classes.gridContainer}
          >
            <Grid item xs={3} data-test="grid-child-0">
              <ButtonBase disableRipple={true} href="/products/AmazonBasics">
                <ItemContainer
                  title="AmazonBasics"
                  data-test="item-0"
                  image={item1}
                  linkText="See more"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={3}>
              <ButtonBase
                disableRipple={true}
                href="/products/Shop by Category"
              >
                <ItemContainer
                  title="Shop by Category"
                  image={item7}
                  data-test="item-1"
                  linkText="Shop now"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={3}>
              <ButtonBase
                disableRipple={true}
                href="/products/Deals & Promotions"
              >
                <ItemContainer
                  title="Deals & Promotions"
                  image={item3}
                  data-test="item-2"
                  linkText="Shop now"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={3} container direction="column" spacing={2}>
              <Grid item>
                <ItemWithButtonContainer />
              </Grid>
              <Grid item>
                <ImageItemContainer image={item2} />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>

      <main>
        <Container
          maxWidth={false}
          disableGutters={true}
          style={{
            backgroundColor: "#e8eaf6",
            // paddingTop: 110,
            //paddingLeft: 15
          }}
        >
          <Grid
            container
            spacing={3}
            alignItems="flex-start"
            className={classes.secondMain}
          >
            <Grid item xs={3}>
              <ButtonBase disableRipple={true} href="/products/Oculus">
                <ItemContainer
                  title="Oculus"
                  data-test="item-3"
                  image={item9}
                  linkText="Shop now"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={3}>
              <ButtonBase
                disableRipple={true}
                href="/products/Computers & Accessories"
              >
                <ItemContainer
                  title="Computers & Accessories"
                  image={item10}
                  data-test="item-4"
                  linkText="Shop now"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={3}>
              <ButtonBase
                disableRipple={true}
                href="/products/Gaming Accessories"
              >
                <ItemGridContainer
                  title="Gaming accessories"
                  mainLinkText="See more"
                  items={[
                    { image: mini1, linkText: "Headsets" },
                    { image: mini2, linkText: "Keyboards" },
                    { image: mini3, linkText: "Chairs" },
                    { image: mini4, linkText: "Computer mice" },
                  ]}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={3}>
              <ButtonBase disableRipple={true} href="/products/Easy Returns">
                <ItemContainer
                  title="Easy returns"
                  image={image14}
                  linkText="Learn more"
                />
              </ButtonBase>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Container
        maxWidth={false}
        disableGutters={true}
        style={{ paddingTop: 50, paddingBottom: 20 }}
      >
        <Divider />
        <Container maxWidth="xs" className={classes.lowerMain}>
          <Typography gutterBottom={false} variant="caption">
            See personalized recommendations
          </Typography>
          <Button
            color="primary"
            variant="contained"
            href="/login"
            disableElevation={true}
            size="small"
            className={classes.submit}
          >
            Sign in
          </Button>
          <Typography style={{ fontSize: 10 }}>
            New customer? <Link>Start here.</Link>
          </Typography>
        </Container>
        <Divider />
      </Container>
      <main></main>
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
export default Home;
