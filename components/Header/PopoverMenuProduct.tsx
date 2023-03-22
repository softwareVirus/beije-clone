import React, { useContext } from "react";
import { Popover, Grid, Slide, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { HeaderPopoverContext } from "@/contexts/muiComponentContext";

export default function PopoverMenuProduct() {
  const { isHeaderPopoverOpen, setIsHeaderPopoverOpen } =
    useContext(HeaderPopoverContext);

  const handlePopoverClose = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event);
    setIsHeaderPopoverOpen(event.pageY <= 80);
  };

  const open = isHeaderPopoverOpen;

  return (
    <Popover
      anchorReference="anchorPosition"
      disablePortal={true}
      anchorPosition={{ top: 80, left: -16 }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={open}
      sx={{
        padding: 0,
      }}
      TransitionProps={{
        timeout: 200,
      }}
      TransitionComponent={Slide}
      onClose={handlePopoverClose}
      style={{ zIndex: 2 }}
    >
      <Grid onMouseLeave={handlePopoverClose}>
        <Container
          maxWidth={"lg"}
          sx={{
            p: "24px 0 72px",
            gap: "48px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        ></Container>
      </Grid>
    </Popover>
  );
}
