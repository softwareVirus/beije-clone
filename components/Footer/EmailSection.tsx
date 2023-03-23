import { styles } from "@/utils/style";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Box } from "@mui/system";

const EmailSection = () => {
  return (
    <Grid
      sx={{
        width: {
          md: "50%",
          xs: "100%",
        },
      }}
    >
      <Grid
        sx={{
          ...styles.displayBox,
          width: {
            md: "85%",
            xs: "100%",
          },
          gap: "24px",
        }}
      >
        <Grid>
          <MuiLink
            href="/"
            component={Link}
            sx={{
              flexWrap: 1,
              height: "100%",
            }}
          >
            <Image
              src="/beije-white.svg"
              width={56.39}
              height={24}
              alt="beije logo"
            />
          </MuiLink>
        </Grid>
        <Grid>
          <Typography variant="subtitle1">Arayı Açmayalım!</Typography>
          <Typography variant="body2" color={"rgba(255, 255, 255, 0.698)"}>
            Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.
          </Typography>
        </Grid>
        <Grid
          sx={{
            ...styles.displayBox,
            gap: 2,
          }}
        >
          <Box
            component={"form"}
            sx={{
              display: "flex",
              width: "100%",
              gap: "16px",
              flexDirection: {
                md: "row",
                xs: "column",
              },
              justifyContent: {
                md: "unset",
                xs: "center",
              },
              alignItems: {
                md: "center",
                xs: "flex-start",
              },
            }}
          >
            <TextField
              fullWidth={true}
              label="e-mail adresin"
              placeholder="halide.edip@adivar.com"
              InputLabelProps={{
                size: "small",
              }}
            />
            <Button
              variant="contained"
              sx={{
                width: {
                  md: "auto",
                  xs: "100%",
                },
                bgcolor: "rgb(255, 255, 255)",
                color: "black",
                opacity: "0.87",
              }}
            >
              Gönder
            </Button>
          </Box>
          <Grid sx={{width: '100%'}}>
            <Typography
              sx={{
                letterSpacing: "-0.03px",
                fontStyle: "normal",
                fontSize: "0.75rem",
                fontWeight: "400",
                lineHeight: "20px",
                opacity: "0.7",
                color: "white",
                textAlign: {
                  md: "unset",
                  xs: "center",
                },
                whiteSpace: 'break-spaces'
              }}
            >
              Abone olarak, beije KVKK ve Gizlilik Politikası&apos;nı kabul ediyor ve
              beije&apos;den haber almayı onaylıyorum.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmailSection;
