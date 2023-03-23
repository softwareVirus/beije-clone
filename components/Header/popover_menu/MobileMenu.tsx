import { Grid, Typography } from "@mui/material";
import React, {useContext} from "react";
import {
  HeaderPopoverTypeContext,
  HeaderPopoverMobileContext,
} from "@/contexts/muiComponentContext";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const style = {
  "&:hover": {
    borderBottom: "1px solid rgba(0, 0, 0, 0.9)",
    transition: "all 0.7s ease",
  },
  gridStyle: {
    padding: "12px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

const MobileMenu = () => {
  const { isHeaderPopoverMobileOpen, setIsHeaderPopoverMobileOpen } =
    useContext(HeaderPopoverMobileContext);
  const { headerPopoverType, setHeaderPopoverType } = useContext(
    HeaderPopoverTypeContext
  );
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setIsHeaderPopoverMobileOpen(true);
  };
  return (
    <Grid>
      <Grid sx={style.gridStyle}>
        <Typography
          aria-owns={
            isHeaderPopoverMobileOpen ? "mouse-over-popover" : undefined
          }
          aria-haspopup="true"
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            handlePopoverOpen(e);
            setHeaderPopoverType("product");
          }}
          sx={style}
        >
          Ürünler
        </Typography>
        <KeyboardArrowRightIcon />
      </Grid>
      <Grid sx={style.gridStyle}>
        <Typography
          sx={style}
          aria-owns={
            isHeaderPopoverMobileOpen ? "mouse-over-popover" : undefined
          }
          aria-haspopup="true"
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            handlePopoverOpen(e);
            setHeaderPopoverType("whoWeAre");
          }}
        >
          Biz Kimiz
        </Typography>
        <KeyboardArrowRightIcon />
      </Grid>
      <Grid sx={style.gridStyle}>
        <Typography
          sx={style}
          aria-owns={
            isHeaderPopoverMobileOpen ? "mouse-over-popover" : undefined
          }
          aria-haspopup="true"
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            handlePopoverOpen(e);
            setHeaderPopoverType("donationCulture");
          }}
        >
          Bağış Kültürü
        </Typography>
        <KeyboardArrowRightIcon />
      </Grid>
      <Grid sx={style.gridStyle}>
        <MuiLink href="/" component={Link} underline="none" color={"inherit"}>
          <Typography>Blog</Typography>
        </MuiLink>
      </Grid>
      <Grid sx={style.gridStyle}>
        <MuiLink href="/" component={Link} underline="none" color={"inherit"}>
          <Typography>Kendi Paketini Oluştur!</Typography>
        </MuiLink>
      </Grid>
    </Grid>
  );
};

export default MobileMenu;
