import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ItemCard from "./ItemCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import useSWR from "swr";
import { Product, fetcher } from "../src/constants";
import { useRouter } from "next/router";
import { store } from "../src/cartStore";

const useStyles = makeStyles((theme) => ({
  root: {},

  rightContainer: {
    paddingLeft: theme.spacing(2),
    borderLeft: "1px solid lightgray",
    borderLeftWidth: 2,
  },
}));

type AppProps = {
  pid: string;
};

const CategoryDisplayPage = ({ pid }: AppProps) => {
  const router = useRouter();
  const categoryId = store((state) => state.categoryId);
  const [data, setData] = React.useState<Product[] | []>([]);
  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [categoryId]);

  /*const { data, error } = useSWR<Product[]>(
      `https://fakestoreapi.com/products?limit=18`,
      fetcher
    );*/
  const classes = useStyles();
  return (
    <Grid item xs={10} container className={classes.rightContainer}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          {pid}
        </Typography>
        <Typography variant="body2" gutterBottom>
          The fucking subheader and mini categories goes here
        </Typography>
        <Box border="1px solid lightgray" mt={4} p={2} borderRadius={15}>
          <Typography variant="body1">
            1-12 of over 90,000 results for{" "}
            <span style={{ fontWeight: "bold", color: "#ff5722" }}>{pid}</span>
          </Typography>
        </Box>
        <Box
          mt={4}
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="center"
        >
          {data &&
            data.map(
              ({
                id,
                title,
                price,
                image,
                description,
                rating = Math.floor(Math.random() * 6),
              }) => (
                <Box
                  onClick={() =>
                    router.push({
                      pathname: "/items/[pid]",
                      query: {
                        pid: id,
                        title: title,
                      },
                    })
                  }
                  p={2}
                  width={355}
                  key={id}
                >
                  <ItemCard
                    image={image}
                    price={price}
                    title={title}
                    description={description}
                  />
                </Box>
              )
            )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default CategoryDisplayPage;
