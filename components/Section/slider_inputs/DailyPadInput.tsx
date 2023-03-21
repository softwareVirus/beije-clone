import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { Grid, Slider } from "@mui/material";
import { DailyPadContext } from "@/contexts/customContext";
import { styles } from "@/utils/style";

function valuetext(value: number) {
  return `${value}`;
}

const DailyPadInput = () => {
  const { dailyPadInputs, setDailyPadInputs } = useContext(DailyPadContext);

  const handleDailyPad = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    const value: number = Array.isArray(newValue) ? newValue[0] : newValue;
    setDailyPadInputs({ ...dailyPadInputs, dailyPad: value });
  };

  const handleSuperDailyPad = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    const value: number = Array.isArray(newValue) ? newValue[0] : newValue;
    setDailyPadInputs({ ...dailyPadInputs, superDailyPad: value });
  };

  console.log(dailyPadInputs);
  return (
    <Grid sx={{ ...styles.displayBox, gap: "1.5rem", width: "100%", mt: 5 }}>
      <Grid sx={{ width: "100%" }}>
        <Typography sx={{ height: 42 }}>Günlük Ped</Typography>
        <Slider
          aria-label="Custom marks"
          value={dailyPadInputs.dailyPad}
          getAriaValueText={valuetext}
          onChange={handleDailyPad}
          step={10}
          valueLabelDisplay="auto"
          max={100}
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
          <Typography>100</Typography>
        </Grid>
      </Grid>
      <Grid sx={{ width: "100%" }}>
        <Typography sx={{ height: 42 }}>Süper Günlük Ped</Typography>
        <Slider
          aria-label="Custom marks"
          value={dailyPadInputs.superDailyPad}
          getAriaValueText={valuetext}
          onChange={handleSuperDailyPad}
          step={10}
          valueLabelDisplay="auto"
          max={100}
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
          <Typography>100</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DailyPadInput;
