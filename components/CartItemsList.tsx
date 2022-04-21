import React from "react";
import Card from "@material-ui/core/Card";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import theme from "../src/theme";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Image from "next/image";
import Box from "@material-ui/core/Box";
import SelectBootstrapInput from "./SelectBootstrapInput";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      display: "flex",
      flexDirection: "row",
      // flex: "1 0 auto",
    },
    cover: {
      width: 151,
    },
  })
);
const CartItemsList = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [age, setAge] = React.useState<number>(0);
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(Number(event.target.value));
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Card>
      <CardHeader
        style={{ borderBottom: "1px solid lightgray" }}
        title={<Typography variant="h5">Shopping Cart</Typography>}
        subheader={
          <ButtonBase disableRipple>
            <Typography style={{ fontSize: 13, color: "#00695f" }}>
              Deselect all items
            </Typography>
          </ButtonBase>
        }
      />
      <CardContent className={classes.content}>
        <Checkbox
          style={{ color: "#00695f" }}
          size="small"
          checked={checked}
          onChange={handleChange}
          disableRipple
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Image
          width={200}
          height={150}
          alt=""
          src="/testImg.jpg"
          objectFit="cover"
        />
        <Box
          display="flex"
          flexDirection="column"
          flexWrap="wrap"
          style={{ width: "50%", marginLeft: 10 }}
        >
          <Typography
            variant="body1"
            style={{ fontWeight: 500, color: "black" }}
          >
            Amazon Basics Heavy-Duty Extension Dual Arm, Full Motion
            Articulating TV Mount for 37-80 inch TVs up to 132 lbs, fits LED LC…
          </Typography>
          <Box display="flex">
            <FormControl style={{ paddingLeft: 6, paddingRight: 10 }}>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={age}
                autoWidth={true}
                defaultValue={1}
                displayEmpty={true}
                onChange={handleSelectChange}
                input={<SelectBootstrapInput />}
              >
                <MenuItem value={0}>
                  <em>Qty:1</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
              </Select>
            </FormControl>
            <Divider
              orientation="vertical"
              flexItem
              style={{ backgroundColor: "lightgray" }}
            />
            <ButtonBase
              disableRipple
              style={{ paddingLeft: 10, paddingRight: 10 }}
            >
              <Typography style={{ fontSize: 11, color: "#00695f" }}>
                Delete
              </Typography>
            </ButtonBase>
            <Divider
              orientation="vertical"
              flexItem
              style={{ backgroundColor: "lightgray" }}
            />
            <ButtonBase
              disableRipple
              style={{ paddingLeft: 10, paddingRight: 10 }}
            >
              <Typography style={{ fontSize: 11, color: "#00695f" }}>
                Save for later
              </Typography>
            </ButtonBase>
            <Divider
              orientation="vertical"
              flexItem
              style={{ backgroundColor: "lightgray" }}
            />
            <ButtonBase
              disableRipple
              style={{ paddingLeft: 10, paddingRight: 6 }}
            >
              <Typography style={{ fontSize: 11, color: "#00695f" }}>
                Compare with similar items
              </Typography>
            </ButtonBase>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          ml="auto"
          style={{ fontWeight: "bold", fontSize: 16 }}
        >
          $87.99
        </Box>
      </CardContent>
      <CardActions style={{ borderTop: "1px solid lightgray" }}>
        <Box flexGrow={1} />
        <Box style={{ fontSize: 17, fontWeight: 450, color: "black" }}>
          {" "}
          Subtotal (1 item) : <span style={{ fontWeight: "bold" }}>$87.99</span>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CartItemsList;
