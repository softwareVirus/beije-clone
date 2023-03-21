import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { Grid, Slider } from "@mui/material";
import { PadContext } from "@/contexts/customContext";
import { styles } from "@/utils/style";

function valuetext(value: number) {
  return `${value}`;
}

const PadInput = () => {
  const { padInputs, setPadInputs } = useContext(PadContext);

  const handleStandardPad = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    const value: number = Array.isArray(newValue) ? newValue[0] : newValue;
    setPadInputs({ ...padInputs, standardPad: value });
  };

  const handleSuperPad = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    const value: number = Array.isArray(newValue) ? newValue[0] : newValue;
    setPadInputs({ ...padInputs, superPad: value });
  };

  const handleSuperPlusPad = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    const value: number = Array.isArray(newValue) ? newValue[0] : newValue;
    setPadInputs({ ...padInputs, superPlusPad: value });
  };

  console.log(padInputs);
  return (
    <Grid sx={{ ...styles.displayBox, gap: "0", width: "100%", mt: 5 }}>
      <Grid sx={{ width: "100%" }}>
        <Typography sx={{ height: 42 }}>Standart Ped</Typography>
        <Slider
          aria-label="Custom marks"
          value={padInputs.standardPad}
          getAriaValueText={valuetext}
          onChange={handleStandardPad}
          step={10}
          valueLabelDisplay="auto"
          max={60}
          marks
        />
        <Grid
          sx={{
            ...styles.displayBox,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Typography>0</Typography>
          <Typography>60</Typography>
        </Grid>
      </Grid>
      <Grid sx={{ width: "100%" }}>
        <Typography sx={{ height: 42 }}>Süper Ped</Typography>
        <Slider
          aria-label="Custom marks"
          value={padInputs.superPad}
          getAriaValueText={valuetext}
          onChange={handleSuperPad}
          step={10}
          valueLabelDisplay="auto"
          max={60}
          marks
        />
        <Grid
          sx={{
            ...styles.displayBox,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Typography>0</Typography>
          <Typography>60</Typography>
        </Grid>
      </Grid>
      <Grid sx={{ width: "100%" }}>
        <Typography sx={{ height: 42 }}>Süper+ Ped</Typography>
        <Slider
          aria-label="Custom marks"
          value={padInputs.superPlusPad}
          getAriaValueText={valuetext}
          onChange={handleSuperPlusPad}
          step={10}
          valueLabelDisplay="auto"
          max={60}
          marks
        />
        <Grid
          sx={{
            ...styles.displayBox,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Typography>0</Typography>
          <Typography>60</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PadInput;
