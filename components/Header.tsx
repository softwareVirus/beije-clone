import { AppBar, Typography, Badge, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import React, { useContext } from "react";
import Image from "next/image";
import { HeaderPopoverContext } from "@/contexts/muiComponentContext";

const style = {
  "&:hover": {
    borderBottom: "1px solid rgba(0, 0, 0, 0.9)",
    transition: "all 0.7s ease",
  },
};

const Header = () => {
  const { isHeaderPopoverOpen, setIsHeaderPopoverOpen } =
    useContext(HeaderPopoverContext);
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    const open = Boolean(event.currentTarget);
    setIsHeaderPopoverOpen(open);
  };

  const handlePopoverClose = () => {
    setIsHeaderPopoverOpen(false);
  };
  return (
    <AppBar
      elevation={4}
      color="default"
      sx={{
        padding: {
          xs: "0 27px",
          md: "0 144px",
        },
        boxShadow: "none",
        overflow:'hidden',
        zIndex:1
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
          margin: "0 auto",
          height: 80,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: 27.2,
            display: "flex",
            alignItems: "center",
            maxWidth: 172,
            minWidth: 56.39,
            width: "12vw",
            flexShrink: 0,
          }}
        >
          <MuiLink
            href="/"
            component={Link}
            sx={{
              flexWrap: 1,
              height: "100%",
            }}
          >
            <Image
              src="/beije.svg"
              width={56.39}
              height={24}
              alt="beije logo"
            />
          </MuiLink>
        </Box>
        <Box
          component={"nav"}
          sx={{
            display: "flex",
            flexGrow: 1,
            gap: 4,
          }}
        >
          <Typography
            aria-owns={isHeaderPopoverOpen ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            sx={style}
          >
            Ürünler
          </Typography>
          <Typography sx={style}>Biz Kimiz</Typography>
          <Typography sx={style}>Bağış Kültürü</Typography>
          <MuiLink href="/" component={Link} underline="none" color={"inherit"}>
            <Typography>Blog</Typography>
          </MuiLink>
          <MuiLink href="/" component={Link} underline="none" color={"inherit"}>
            <Typography>Kendi Paketini Oluştur!</Typography>
          </MuiLink>
        </Box>
        <Box
          component={"nav"}
          sx={{ gap: 2, display: "flex", justifyContent: "flex-end" }}
        >
          <MuiLink href="/" component={Link} underline="none" color={"inherit"}>
            <Badge
              sx={{
                height: 32,
                width: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src="/cart.svg" width={24} height={24} alt="cart" />
            </Badge>
          </MuiLink>
          <MuiLink href="/" component={Link} underline="none" color={"inherit"}>
            <Grid
              container
              sx={{
                width: 32,
                height: 32,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src="/profil.svg" width={24} height={24} alt="profil" />
            </Grid>
          </MuiLink>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
