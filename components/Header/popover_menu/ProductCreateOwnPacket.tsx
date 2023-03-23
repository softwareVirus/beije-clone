import React from "react";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import Image from "next/image";
import { Grid, Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ProductCreateOwnPacket = () => {
  return (
    <Grid item md={2} xs={12}>
      <MuiLink
        href="/"
        component={Link}
        sx={{
          flexWrap: 1,
          height: "100%",
          textDecoration: "none",
        }}
      >
        <Grid
          display={"flex"}
          flexDirection="column"
          alignItems={"flex-end"}
          sx={{
            mt: 6.5,
            height: 400,
            gap: 1,
          }}
        >
          <Grid
            sx={{
              position: "relative",
              height: "90%",
              width: "100%",
            }}
          >
            <Image
              src={
                "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fcustom-packet.png&w=1920&q=75"
              }
              alt={"Kendi paketini oluştur"}
              fill
            />
          </Grid>
          <Box display={"flex"} alignItems={"center"} gap={"12px"}>
            <Grid container alignItems={"center"} width="18.56px" height="24px">
              <Image
                src={"./header_icons/setting.svg"}
                alt={"setting"}
                width={15.9}
                height={24}
                style={{
                  height: "auto",
                }}
              />
            </Grid>

            <Typography
              flex={"1 1 auto"}
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                },
                whiteSpace: "break-spaces",
                letterSpacing: "-0.03em",
              }}
            >
              Kendi Paketini oluştur
            </Typography>
            <KeyboardArrowRightIcon sx={{ width: "15.9px" }} />
          </Box>
        </Grid>
      </MuiLink>
    </Grid>
  );
};

export default ProductCreateOwnPacket;
