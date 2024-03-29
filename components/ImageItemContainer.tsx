import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Image, { StaticImageData } from "next/image";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    minWidth: 310,
    minHeight: 245,
    position: "relative",
  },
  bullet: {
    display: "inline-block",
    margin: "0 1px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    objectFit: "cover",
  },
});

type AppProps = {
  image: StaticImageData;
};

export default function ImageItemContainer({ image }: AppProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Image src={image} layout="fill" objectFit="cover" />
      </CardContent>
    </Card>
  );
}
