import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Image from "next/image";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import SelectBootstrapInput from "./SelectBootstrapInput";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import useSWR, { useSWRConfig } from "swr";
import { useSession, getSession } from "next-auth/client";
import { store } from "../src/cartStore";

type AppProps = {
  id: number;
  description: string;
  quantity: number;
  price: number;
  image: string;
};

export default function ProductInCart({
  description,
  quantity,
  price,
  image,
  id,
}: AppProps) {
  const [checked, setChecked] = React.useState(false);
  const [age, setAge] = React.useState<number>(0);
  const [session, loading] = useSession();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(Number(event.target.value));
  };
  const { mutate } = useSWRConfig();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const onDelete = (id: number) => {
    fetch(`/api/v2/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(store.getState().id),
    }).then((res) => mutate(`/api/v2/${session?.user?.email}`));
  };
  return (
    <>
      {" "}
      <Checkbox
        style={{
          color: "#00695f",
        }}
        size="small"
        checked={checked}
        onChange={handleChange}
        disableRipple
        inputProps={{
          "aria-label": "primary checkbox",
        }}
      />
      <Image width={200} height={150} alt="" src={image} objectFit="cover" />
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        style={{
          width: "50%",
          marginLeft: 10,
        }}
      >
        <Typography
          variant="body1"
          style={{
            fontWeight: 500,
            color: "black",
          }}
        >
          {description}
        </Typography>

        <Box display="flex">
          <FormControl
            style={{
              paddingLeft: 6,
              paddingRight: 10,
            }}
          >
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
            style={{
              backgroundColor: "lightgray",
            }}
          />
          <ButtonBase
            disableRipple
            onClick={() => onDelete(id)}
            style={{
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Typography
              style={{
                fontSize: 11,
                color: "#00695f",
              }}
            >
              Delete
            </Typography>
          </ButtonBase>
          <Divider
            orientation="vertical"
            flexItem
            style={{
              backgroundColor: "lightgray",
            }}
          />
          <ButtonBase
            disableRipple
            style={{
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Typography
              style={{
                fontSize: 11,
                color: "#00695f",
              }}
            >
              Save for later
            </Typography>
          </ButtonBase>
          <Divider
            orientation="vertical"
            flexItem
            style={{
              backgroundColor: "lightgray",
            }}
          />
          <ButtonBase
            disableRipple
            style={{
              paddingLeft: 10,
              paddingRight: 6,
            }}
          >
            <Typography
              style={{
                fontSize: 11,
                color: "#00695f",
              }}
            >
              Compare with similar items
            </Typography>
          </ButtonBase>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        ml="auto"
        style={{
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {`${price} $`}
      </Box>
    </>
  );
}
