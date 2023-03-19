import { AppBar } from "@mui/material";
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
      color='default'
      sx={{
        padding: {
          xs: "0 27px",
          md: "0 144px",
        }
      }}
    >
      <Container maxWidth="lg" sx={{
        padding: {
          xs: "16px 0px",
          sm: "16px 24px",
          md: "24px 24px",
        },
        maxWidth: {
          lg: "1152px"
        },
        gap: 3
      }}>
        <Box>
          <MuiLink href="/" component={Link}>
            <Image
              src="/beije.svg"
              width={56.39}
              height={24}
              alt="beije logo"
            />
          </MuiLink>
        </Box>
        <Box component={"nav"}></Box>
        <Box component={"nav"}></Box>
      </Container>
    </AppBar>
  );
};

export default Header;
