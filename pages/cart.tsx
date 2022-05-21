import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import SecondaryToolbar from "../components/SecondaryToolbar";
import Navbar from "../components/Navbar";
import { useSession, getSession } from "next-auth/client";
import ButtonBase from "@material-ui/core/ButtonBase";
import Image from "next/image";
import { store } from "../src/cartStore";
import CartWithItemsPage from "../components/CartWithItemsPage";
import EmptyCartPage from "../components/EmptyCartPage";
import { fetcher, Product } from "../src/constants";
import useSWR from "swr";
import { Cart, Prisma } from "@prisma/client";
import LoadingState from "../components/LoadingState";

const CartPage = () => {
  const [session, loading] = useSession();
  const cartId = store((state) => state.id);
  const { data, error } = useSWR(`/api/v2/${session?.user?.email}`, fetcher);

  const cartItems = data?.cart.products as Prisma.JsonArray;
  React.useEffect(() => {
    store.setState({ id: data?.cart.id });
  }, [data]);

  const classes = useStyles();

  return (
    <div>
      <header>
        <Navbar session={session} />
        <Toolbar />
        <SecondaryToolbar />
      </header>

      <Container
        maxWidth={false}
        disableGutters={true}
        style={{
          backgroundColor: "#e8eaf6",
          paddingTop: 1,
        }}
      >
        {!cartItems ? (
          <LoadingState />
        ) : cartItems.length ? (
          <CartWithItemsPage items={cartItems} />
        ) : (
          <EmptyCartPage />
        )}
      </Container>
    </div>
  );
};

export default CartPage;

const useStyles = makeStyles((theme) => ({
  lowerMain: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    //paddingTop: 40,
    paddingBottom: 20,
  },
}));
