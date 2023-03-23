import { AppBar, Typography, Badge, Grid, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import React, { useContext } from "react";
import Image from "next/image";
import {
  HeaderPopoverContext,
  HeaderPopoverMobileContext,
  HeaderPopoverTypeContext,
} from "@/contexts/muiComponentContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from '@mui/icons-material/Clear';
import { OrderContext } from "@/contexts/customContext";

const style = {
  "&:hover": {
    borderBottom: "1px solid rgba(0, 0, 0, 0.9)",
    transition: "all 0.7s ease",
  },
};

const Header = () => {
  const { isHeaderPopoverMobileOpen, setIsHeaderPopoverMobileOpen } =
    useContext(HeaderPopoverMobileContext);
  const { isHeaderPopoverOpen, setIsHeaderPopoverOpen } =
    useContext(HeaderPopoverContext);
  const { headerPopoverType, setHeaderPopoverType } = useContext(
    HeaderPopoverTypeContext
  );
  const { order } = useContext(OrderContext)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
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
        overflow: "hidden",
        zIndex: 1,
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
          height: {
            md: 80,
            xs: 64,
          },
          display: "flex",
          alignItems: "center",
          justifyContent: {
            md: "center",
            xs: "space-between",
          },
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
        {matches && (
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
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                handlePopoverOpen(e);
                setHeaderPopoverType("product");
              }}
              sx={style}
            >
              Ürünler
            </Typography>
            <Typography
              sx={style}
              aria-owns={isHeaderPopoverOpen ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                handlePopoverOpen(e);
                setHeaderPopoverType("whoWeAre");
              }}
            >
              Biz Kimiz
            </Typography>
            <Typography
              sx={style}
              aria-owns={isHeaderPopoverOpen ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                handlePopoverOpen(e);
                setHeaderPopoverType("donationCulture");
              }}
            >
              Bağış Kültürü
            </Typography>
            <MuiLink
              href="/"
              component={Link}
              underline="none"
              color={"inherit"}
            >
              <Typography>Blog</Typography>
            </MuiLink>
            <MuiLink
              href="/"
              component={Link}
              underline="none"
              color={"inherit"}
            >
              <Typography>Kendi Paketini Oluştur!</Typography>
            </MuiLink>
          </Box>
        )}
        <Box
          component={"nav"}
          sx={{ gap: 2, display: "flex", justifyContent: "flex-end" }}
        >
          <MuiLink href="/" component={Link} underline="none" color={"inherit"}>
            <IconButton sx={{ p: 0 }}>
              <Badge
                badgeContent={order.length}
                color="success"
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
            </IconButton>
          </MuiLink>
          <MuiLink href="/" component={Link} underline="none" color={"inherit"}>
            <IconButton sx={{ p: 0 }}>
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
            </IconButton>
          </MuiLink>
          <Grid container alignContent={"center"}>
            {!matches && (
              isHeaderPopoverMobileOpen
              ?
              <IconButton sx={{ p: 0 }} onClick={() => {
                setIsHeaderPopoverMobileOpen(false)
                setHeaderPopoverType('')
              }}>
                <ClearIcon />
              </IconButton>
              :
              <IconButton sx={{ p: 0 }} onClick={() => {
                setIsHeaderPopoverMobileOpen(true)
              }}>
                <MenuIcon />
              </IconButton>
            )}
          </Grid>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
