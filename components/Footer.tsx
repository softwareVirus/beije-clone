import React from "react";
import { Grid, Box } from "@mui/material";
import { styles } from "@/utils/style";
import EmailSection from "./Footer/EmailSection";
import BeijeLinks from "./Footer/BeijeLinks";
import SocialMediaLinks from "./Footer/SocialMediaLinks";
import BottomSection from "./Footer/BottomSection";

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
          <Box sx={{
            display:'flex',
            flexDirection: {
              md:'row',
              xs: 'column'
            },
            gap: {
              md:'24px',
              xs:'40px'
            }
          }}>
            <BeijeLinks />
            <SocialMediaLinks />
          </Box>
        </Box>
        <BottomSection />
      </Box>
    </Grid>
  );
};

export default Footer;
