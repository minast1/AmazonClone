import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center"
  },
  border: {
    borderBottom: "1px solid lightgray",
    width: "80%"
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    paddingLeft: theme.spacing(0.5),
    fontWeight: 300,
    width : '60%',
    fontSize: 12,
    color: "gray"
  }
}));

const DividerWithText = ({ children }) => {
 const classes = useStyles();
 return (
  <div className={classes.container}>
    <div className={classes.border} />
    <span className={classes.content}>{children}</span>
    <div className={classes.border} />
  </div>
 );
};
export default DividerWithText;