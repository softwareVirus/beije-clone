import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import Image from "next/image";

const linkNames: string[] = [
  "KVKK Aydınlatma Metni",
  "Üyelik Sözleşmesi",
  "Gizlilik Politikası",
  "Çerez Politikası",
  "Test Sonuçları",
];

const linkDirections: string[] = [
  "/know-us/kvkk",
  "/know-us/membership-agreement",
  "/know-us/privacy",
  "/know-us/cookies",
  "/know-us/test-results",
];

const BottomSection = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Divider
        sx={{
          margin: "24px 0",
          borderWidth: "0px 0px thin",
          borderStyle: "solid",
          borderColor: "rgba(255,255,255,0.5)",
        }}
      />
      <Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              md: "row",
              xs: "column",
            },
            m: "2rem auto 4rem",
            gap: "24px",
            color: "rgba(255, 255, 255, 0.498)",
          }}
        >
          <Typography variant="subtitle2">
            2023 beije. Tüm hakları saklıdır.
          </Typography>
          <Grid
            sx={(theme) => ({
              display: "flex",
              gap: "24px",
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                alignItems: "center",
                mb: 3,
                width: "100%",
                ml: 0,
              },
            })}
          >
            {linkNames.map((item, index) => {
              return (
                <Grid
                  sx={{
                    cursor: "pointer",
                  }}
                  key={item + index}
                >
                  <MuiLink
                    href={linkDirections[index]}
                    component={Link}
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <Typography color="inherit" variant="body2">
                      {item}
                    </Typography>
                  </MuiLink>
                </Grid>
              );
            })}
          </Grid>
          <Grid sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <MuiLink
              href={"/en/custom-packet"}
              component={Link}
              sx={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Typography color="inherit" variant="body2">
                EN
              </Typography>
            </MuiLink>
            |
            <MuiLink
              href={"/custom-packet"}
              component={Link}
              sx={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Typography color="white" variant="body2">
                TR
              </Typography>
            </MuiLink>
          </Grid>
        </Grid>
        <Grid container alignItems={'center'} justifyContent={'center'} gap={1}>
          <Image
            src={'./social_media/masterCard.svg'}
            alt='master card'
            width={50}
            height={50}
            style={{height:'auto'}}
          />
          <Image
            src={'./social_media/visa.svg'}
            alt='visa'
            width={50}
            height={50}
            style={{height:'auto'}}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BottomSection;
