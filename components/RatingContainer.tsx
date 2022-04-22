import React from "react";
import Star from "@material-ui/icons/Star";
import Box from "@material-ui/core/Box";
import NoSsr from "@material-ui/core/NoSsr";
import Typography from "@material-ui/core/Typography";

import { Rating } from "../src/constants";

type AppProps = {
  rating: Rating;
};
function RatingContainer({ rating }: AppProps) {
  const stars = Array.from(Array(rating).keys());
  //console.log(rating);
  return (
    <Box display="flex" flexDirection="row" mb={1}>
      {Array.from({ length: Math.round(rating.rate) }, (item, index) => (
        <NoSsr key={index}>
          <Star color="primary" fontSize="small" />
        </NoSsr>
      ))}
      <Typography variant="caption" style={{ marginLeft: 5, color: "#1769aa" }}>
        {rating.count} ratings
      </Typography>
    </Box>
  );
}

export default RatingContainer;
