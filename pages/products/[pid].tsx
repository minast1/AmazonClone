import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, capitalize } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SecondaryToolbar from "../../components/SecondaryToolbar";
import Navbar from "../../components/Navbar";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { categories, Product, fetcher } from "../../src/constants";
import CategoryDisplayPage from "../../components/CategoryDisplayPage";
import NoCategoryDisplay from "../../components/NoCategoryDisplay";
import CategoryProducts from "../../components/CategoryProducts";
import ItemCard from "../../components/ItemCard";
import { store } from "../../src/cartStore";

const useStyles = makeStyles((theme) => ({
  root: {},

  rightContainer: {
    paddingLeft: theme.spacing(2),
    borderLeft: "1px solid lightgray",
    borderLeftWidth: 2,
  },
  leftContainer: {
    paddingRight: "10px",
  },
}));

const Products = () => {
  const [session, loading] = useSession();
  const categoryId = store((state) => state.categoryId);
  const router = useRouter();
  const { pid } = router.query;

  // cosnt fetchAllProducts
  const classes = useStyles();
  //console.log(pid);
  return (
    <div>
      <header>
        <Navbar session={session} />
        <Toolbar />
        <SecondaryToolbar />
      </header>

      <main className={classes.root}>
        <Container maxWidth={false} style={{ paddingTop: 15 }}>
          <Grid container>
            <Grid
              item
              xs={2}
              container
              direction="column"
              className={classes.leftContainer}
            >
              <Typography variant="body2" style={{ fontWeight: 700 }}>
                Categories
              </Typography>
              {categories.map((category, index) => (
                <ButtonBase
                  disableRipple
                  data-test={`{product-${index}`}
                  key={index}
                  onClick={() => store.setState({ categoryId: category })}
                >
                  <Box pl={2} pt={1}>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: 700 }}
                      gutterBottom
                    >
                      {capitalize(category)}
                    </Typography>
                    <CategoryProducts category={category} />
                  </Box>
                </ButtonBase>
              ))}
            </Grid>

            {categoryId ? (
              <CategoryDisplayPage pid={pid as string} />
            ) : (
              <NoCategoryDisplay pid={pid as string} />
            )}
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
export default Products;
