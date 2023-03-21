import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Link as MuiLink, Grid, Slider } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PadInput from "./slider_inputs/PadInput";
import DailyPadInput from "./slider_inputs/DailyPadInput";
import TamponInput from "./slider_inputs/TamponInput";

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

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 60,
    label: "60",
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SliderInputs = () => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        ...styles.displayBox,
        ...styles.firstBox,
        width: {
          md: "564px",
          xs: "100%",
        },
        padding: {
          md: 0,
          xs: '40px 27px'
        }
      }}
    >
      <Box sx={{ ...styles.displayBox, gap: "1.5rem", mb: 3.125 }}>
        <Box
          sx={{
            ...styles.displayBox,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h3">Kendi Paketini Oluştur</Typography>
          <MuiLink href="/" component={Link} underline="none" color={"inherit"}>
            <Typography
              sx={{
                letterSpacing: "-0.03em",
                lineHeight: "165%",
              }}
            >
              Nasıl Çalışır?
            </Typography>
          </MuiLink>
        </Box>
        <Typography sx={{ cursor: "auto" }} color="rgba(0, 0, 0, 0.6)">
          Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
          <br />
          miktarlardan, sana özel bir paket oluşturalım.
        </Typography>
      </Box>
      <Grid sx={{ ...styles.inputBox, width: "100%" }}>
        <Grid sx={{ width: "100%", padding: 0 }}>
          <Grid>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="beije Ped" {...a11yProps(0)} />
              <Tab label="beije Günlük Ped" {...a11yProps(1)} />
              <Tab label="beije Tampon" {...a11yProps(2)} />
            </Tabs>
          </Grid>
          <TabPanel value={value} index={0}>
            <PadInput />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <DailyPadInput />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TamponInput />
          </TabPanel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SliderInputs;
