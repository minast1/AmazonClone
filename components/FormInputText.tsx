import React from "react";
import { FormControl, InputLabel } from "@material-ui/core";
import {
  useForm,
  Controller,
  FieldError,
  Control,
  UseFormRegister,
  Path,
} from "react-hook-form";
import { BootstrapInput } from "./BootstrapInput";
import { ErrorMessage } from "@hookform/error-message";
import { MessageType } from "../src/constants";
import { makeStyles } from "@material-ui/core/styles";
import { RegisterFormInput } from "../src/constants";

const useStyles = makeStyles((theme) => ({
  error: {
    color: "red",
    fontSize: "11px",
  },
}));

type Errors = {
  name?: FieldError | undefined;
  email?: FieldError | undefined;
  phone?: FieldError | undefined;
  password?: FieldError | undefined;
  passwordconfirm?: FieldError | undefined;
};

type AppProps = {
  errors: Errors | undefined;
  name: Path<RegisterFormInput>;
  control: Control<RegisterFormInput>;
  label: string;
  register: UseFormRegister<RegisterFormInput>;
};

function FormInputText({ errors, name, control, label, register }: AppProps) {
  const classes = useStyles();

  return (
    <FormControl fullWidth margin="dense" size="small">
      <InputLabel
        htmlFor="bootstrap-input"
        shrink={true}
        error={errors && name in errors}
      >
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <BootstrapInput
            error={errors && name in errors}
            data-test={name}
            fullWidth
            value={value}
            {...register(name)}
            onChange={onChange}
            type={
              name === "password" || name === "passwordconfirm"
                ? "password"
                : "text"
            }
            autoComplete={name === "email" ? "email" : undefined}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }: MessageType) => (
          <span className={classes.error}>{message}</span>
        )}
      />
    </FormControl>
  );
}

export default FormInputText;
