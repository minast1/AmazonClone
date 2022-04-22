import React from "react";
import Star from "@material-ui/icons/Star";
import Box from "@material-ui/core/Box";
import { NoSsr } from "@material-ui/core";

type AppProps = {
  rating: number;
};
function RatingContainer({ rating }: AppProps) {
  const stars = Array.from(Array(rating).keys());
  //console.log(rating);
  return (
    <Box display="flex" flexDirection="row" mb={1}>
      {Array.from({ length: rating }, (item, index) => (
        <NoSsr key={index}>
          <Star color="primary" fontSize="small" />
        </NoSsr>
      ))}
    </Box>
  );
}

export default RatingContainer;
