import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  CircularProgress,
  Toolbar,
  Typography,
} from "@material-ui/core";
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

const LoadingState = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        width="100%"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress size={100} />
      </Box>
    </>
  );
};

export default LoadingState;
