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
    minWidth: 290,
    minHeight: 420,
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
  title: string;
  image: StaticImageData;
  linkText: string;
};

export default function ItemContainer({ title, image, linkText }: AppProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          variant="h3"
          style={{ fontSize: "1.2rem", fontWeight: 600 }}
        >
          {title}
        </Typography>

        <Box pt={2} display="flex" alignItems="center" justifyContent="center">
          <Image
            src={image}
            width={274}
            height={300}
            className={classes.image}
          />
        </Box>
      </CardContent>
      <CardActions style={{ marginLeft: 10 }}>
        <Link>{linkText}</Link>
      </CardActions>
    </Card>
  );
}
