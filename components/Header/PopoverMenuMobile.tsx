import React, { useContext } from "react";
import { Popover, Grid, Slide, Container, Typography } from "@mui/material";
import {
  HeaderPopoverTypeContext,
  HeaderPopoverMobileContext,
} from "@/contexts/muiComponentContext";
import popoverMenuData from "./popoverMenuData";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import MobileMenu from "./popover_menu/MobileMenu";
import MobilePage from "./popover_menu/MobilePage";

interface TransitionProps {
  children: React.ReactElement<any, any>;
}

export default function PopoverMenuMobile() {
  const { isHeaderPopoverMobileOpen, setIsHeaderPopoverMobileOpen } =
    useContext(HeaderPopoverMobileContext);
  const { headerPopoverType, setHeaderPopoverType } = useContext(
    HeaderPopoverTypeContext
  );
  const data = popoverMenuData(headerPopoverType);
  const handlePopoverClose = (event: React.MouseEvent<HTMLElement>) => {
    setIsHeaderPopoverMobileOpen(false);
    setHeaderPopoverType('')
  };

  return (
    <Popover
      anchorReference="anchorPosition"
      disablePortal={true}
      anchorPosition={{ top: 64, left: -16 }}
      anchorOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
      open={isHeaderPopoverMobileOpen}
      sx={{
        padding: 0,
        top: "64px",
      }}
      TransitionProps={{
        timeout: 400,
      }}
      PaperProps={{
        sx: {
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px",
        },
      }}
      TransitionComponent={React.forwardRef((props: TransitionProps, ref) => (
        <Slide direction="left" ref={ref} {...props} />
      ))}
      onClose={handlePopoverClose}
      style={{ zIndex: 2 }}
    >
      <Grid
        sx={{
          backgroundColor: "#f5f5f5 !important",
        }}
      >
        <Container
          maxWidth={"lg"}
          sx={{
            padding: "24px !important",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CssBaseline />
          {
            headerPopoverType === ''
            ?
            <MobileMenu />
            :
            <MobilePage />
          }
        </Container>
      </Grid>
    </Popover>
  );
}
