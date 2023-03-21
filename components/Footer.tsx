import React from "react";
import { Grid, Box } from "@mui/material";
import { styles } from "@/utils/style";
import EmailSection from "./Footer/EmailSection";
import BeijeLinks from "./Footer/BeijeLinks";

const Footer = () => {
  return (
    <Grid container>
      <Box
        component={"footer"}
        sx={{
          ...styles.displayBox,
          padding: {
            md: "80px 144px",
            xs: "40px 27px",
          },
          gap: {
            md: "64px",
            xs: "24px",
          },
          bgcolor: "rgb(38, 38, 38)",
          color: "white",
        }}
      >
        <Box sx={{
          ...styles.displayBox,
          gap: {
            md:'32px',
            xs:'40px'
          },
          flexDirection: {
            md:'row',
            xs: 'column'
          }
        }}>
          <EmailSection />
          <Box>
            <BeijeLinks />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Footer;
