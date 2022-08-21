import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Image from "next/image";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    minWidth: 324,
  },
  media: {
    // height: 300,
    objectFit: "fill",
  },
});

type AppProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  //onClick: () => void
};

export default function ItemCard({
  title,
  id,
  price,
  image,
  description,
}: AppProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0} data-test={`products-canvas`}>
      <CardActionArea disableRipple>
        <Image
          height={300}
          width={315}
          data-test={`products-image-canvas`}
          className={classes.media}
          alt={title}
          src={image}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body2"
            component="h2"
            noWrap={false}
          >
            {description}
          </Typography>
          <Typography variant="h5" component="h2">
            {`$${price}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $36.48 shipping
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
