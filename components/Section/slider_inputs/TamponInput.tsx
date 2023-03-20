import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { Grid, Slider } from "@mui/material";
import { TamponContext } from "@/contexts/customContext";

const styles = {
  firstBox: {
    width: "564px",
    gap: "4.5rem",
  },
  displayBox: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: 0,
    width: "100%",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
    width: "100%",
  },
};

function valuetext(value: number) {
  return `${value}`;
}

const TamponInput = () => {
  const { tamponInputs, setTamponInputs } = useContext(TamponContext);

  const handleTampon = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    const value: number = Array.isArray(newValue) ? newValue[0] : newValue;
    setTamponInputs({ ...tamponInputs, miniTampon: value });
  };

  const handleSuperTampon = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    const value: number = Array.isArray(newValue) ? newValue[0] : newValue;
    setTamponInputs({ ...tamponInputs, standardTampon: value });
  };

  console.log(tamponInputs);
  return (
    <Grid sx={{ ...styles.displayBox, gap: "1.5rem", width: "100%", mt: 5 }}>
      <Grid sx={{ width: "100%" }}>
        <Typography sx={{ height: 42 }}>Mini Tampon</Typography>
        <Slider
          aria-label="Custom marks"
          value={tamponInputs.miniTampon}
          getAriaValueText={valuetext}
          onChange={handleTampon}
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
        <Typography sx={{ height: 42 }}>Standard Tampon</Typography>
        <Slider
          aria-label="Custom marks"
          value={tamponInputs.standardTampon}
          getAriaValueText={valuetext}
          onChange={handleSuperTampon}
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

export default TamponInput;
