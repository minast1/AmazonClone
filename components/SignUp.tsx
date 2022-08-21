import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Image from "next/image";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Copyright from "./Copyright";
import { useForm, SubmitHandler } from "react-hook-form";
import { authStore } from "../src/authStore";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInputText from "./FormInputText";
import { RegisterFormInput, schema } from "../src/constants";
import { ResponseData } from "../pages/api/auth/signUp";
import { signIn } from "next-auth/client";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    width: "90%",
    display: "flex",
    padding: "25px",
    border: "1px solid lightgray",
    borderRadius: "4px",

    flexDirection: "column",
    alignItems: "center",
  },
  signup: {
    marginTop: theme.spacing(1),
    width: "90%",
    display: "flex",
    border: "1px solid darkgray",
    //borderRadius :'4px',
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    "& .MuiInputLabel-root": {
      fontWeight: 700,
      color: theme.palette.secondary.main,
      fontFamily: "sans-serif",
      [theme.breakpoints.down("xs")]: {
        fontSize: "10px",
      },
    },
    "& .MuiButton-contained": {
      backgroundColor: theme.palette.primary.light,
    },
    "& .MuiFormControl-marginDense": {
      marginBottom: "8px",
    },
    "& .Mui-error": {
      color: "red",
    },
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
  divider: {
    marginTop: "25px",
    width: "inherit",
    borderBottom: "1px solid lightgray",
    // border : '1px  solid black'
    display: "flex",
    flex: 1,
  },
  error: {
    color: "red",
    fontSize: "11px",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<RegisterFormInput>({
    resolver: yupResolver(schema),
  });
  const setAuthView = authStore((state) => state.setAuthView);
  const error = authStore((state) => state.error);

  const onSubmit: SubmitHandler<RegisterFormInput> = async (data, e) => {
    const response = await fetch(`/api/auth/signUp`, {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newUser: ResponseData = await response.json();
    if (!response.ok) {
      authStore.setState({ error: newUser.message });
      return;
    }

    // If the response has a status of 200, sign the new user in

    signIn("credentials", {
      id: data.email,
      password: data.password,
      callbackUrl: `${process.env.NEXT_PUBLIC_URL}`,
    });
    reset();
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box display="flex" justifyContent="center">
          <Image src="/black.png" width="130px" height="35px" />
        </Box>
        {error && (
          <Alert
            severity="error"
            data-test="signup-error"
            style={{ marginRight: "40px", marginBottom: "5px" }}
          >
            {error}
          </Alert>
        )}
        <div className={classes.paper}>
          <Typography
            variant="h1"
            style={{ marginRight: "auto", fontWeight: 400, fontSize: "30px" }}
            component="h1"
          >
            Create account
          </Typography>
          <form
            className={classes.form}
            data-test="register-form"
            onSubmit={handleSubmit(onSubmit)}
            method="post"
            noValidate
          >
            <FormInputText
              name="name"
              label="Your name"
              control={control}
              register={register}
              errors={errors}
            />
            <FormInputText
              name="email"
              label="Email"
              control={control}
              register={register}
              errors={errors}
            />
            <FormInputText
              name="phone"
              label="Phone"
              control={control}
              register={register}
              errors={errors}
            />
            <FormInputText
              name="password"
              label="Password"
              control={control}
              register={register}
              errors={errors}
            />
            <FormInputText
              name="passwordconfirm"
              label="Re-enter password"
              control={control}
              register={register}
              errors={errors}
            />

            <Button
              type="submit"
              fullWidth
              data-test="register"
              variant="contained"
              size="small"
              className={classes.submit}
            >
              Continue
            </Button>
            <Typography
              variant="body2"
              style={{
                fontWeight: "bold",
                fontSize: "11.43px",
                marginTop: "3px",
              }}
            >
              By creating an account, you agree to Amazon's Conditions of Use
              and Privacy Notice.
            </Typography>

            <Box
              mt="25px"
              pl={0}
              display="flex"
              alignItems="center"
              padding={0}
            >
              <Typography
                variant="body2"
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  marginTop: "3px",
                }}
              >
                Already have an account?
              </Typography>
              <Link
                href="#"
                variant="body2"
                style={{
                  color: "#1769aa",
                  fontSize: "14px",
                  paddingLeft: "3px",
                  paddingTop: "3px",
                }}
                onClick={
                  () => setAuthView("sign_in") /* sets the main signIn to true*/
                }
              >
                Sign-In
              </Link>
              <ArrowRightIcon />
            </Box>
          </form>
        </div>
      </Container>
      <Container maxWidth="sm">
        <div className={classes.divider}></div>
        <Box mt={3}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
