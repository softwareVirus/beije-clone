import { AppBar, Typography, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <AppBar
      elevation={4}
      color="default"
      sx={{
        padding: {
          xs: "0 27px",
          md: "0 144px",
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          padding: {
            xs: "16px 0px",
            sm: "16px 24px",
            md: "24px 24px",
          },
          maxWidth: {
            lg: "1152px",
          },
          gap: 3,
          margin:'0 auto',
          height:80,
          display:'flex'
        }}
      >
        <Box
          sx={{
            height: 27.2,
            display: "flex",
            alignItems:'center',
            maxWidth: 172,
            minWidth: 56.39,
            width:'12vw',
            flexShrink: 0,
            position: 'relative',
            top:'2px',
          }}
        >
          <MuiLink href="/" component={Link}
          sx={{
            flexWrap:1,
            height: '100%',
          }}>
            <Image
              src="/beije.svg"
              width={56.39}
              height={24}
              alt="beije logo"
            />
          </MuiLink>
        </Box>
        <Box component={"nav"} sx={{
          display:'flex',
          flexGrow:1,
          gap:4
        }}>
          <Typography>Ürünler</Typography>
          <Typography>Biz Kimiz</Typography>
          <Typography>Bağış Kültürü</Typography>
          <MuiLink href="/" component={Link} underline='none' color={'inherit'}>
            <Typography>Blog</Typography>
          </MuiLink>
          <MuiLink href="/" component={Link} underline='none' color={'inherit'}>
            <Typography>Kendi Paketini Oluştur!</Typography>
          </MuiLink>
        </Box>
        <Box component={"nav"}></Box>
      </Container>
    </AppBar>
  );
};

export default Header;
