import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import { Button, Typography } from "@mui/material";
import "../Filter/Filter.css";

const Filter = ({
  type,
  setType,
  setPage,
  slider,
  setSlider,
  maxSliderValue,
  minSliderValue,
  handleReset,
}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography color="text.secondary">PRICE</Typography>
      <Slider
        sx={{ maxWidth: "350px" }}
        value={slider}
        onChange={(e, newValue) => {
          setSlider(newValue);
          setPage(1);
        }}
        valueLabelDisplay="auto"
        max={maxSliderValue}
        min={minSliderValue}
      />
      <br />
      <br />
      <Typography color="text.secondary">CATEGORIES</Typography>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setPage(1);
          }}
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />

          <FormControlLabel value="Shoes" control={<Radio />} label="Shoes" />

          <FormControlLabel
            value="Clothing"
            control={<Radio />}
            label="Clothing"
          />
        </RadioGroup>
      </FormControl>

      <br />
      <br />
      <Button onClick={handleReset} variant="outlined">
        Reset
      </Button>
    </div>
  );
};

export default Filter;
