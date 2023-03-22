import React, { useContext } from "react";
import {
  Popover,
  Grid,
  Slide,
  Container,
  Box,
  Typography,
} from "@mui/material";
import {
  HeaderPopoverContext,
  HeaderPopoverTypeContext,
} from "@/contexts/muiComponentContext";
import popoverMenuData from "./popoverMenuData";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CssBaseline from "@mui/material/CssBaseline";
import darkScrollbar from "@mui/material/darkScrollbar";

export default function PopoverMenuProduct() {
  const { isHeaderPopoverOpen, setIsHeaderPopoverOpen } =
    useContext(HeaderPopoverContext);
  const { headerPopoverType, setHeaderPopoverType } = useContext(
    HeaderPopoverTypeContext
  );
  const data = popoverMenuData(headerPopoverType);
  const handlePopoverClose = (event: React.MouseEvent<HTMLElement>) => {
    console.log(darkScrollbar());
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
      <CssBaseline />
      <Grid onMouseLeave={handlePopoverClose} sx={{
        
        backgroundColor: "#f5f5f5 !important",
      }}>
        <Container
          maxWidth={"lg"}
          sx={{
            padding: "24px 0 72px !important",
            gap: "48px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {data.data.map((item, index) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: {
                    md: "24px",
                    xs: 0,
                  },
                }}
              >
                <Grid>
                  <Typography variant="h5">{item.title}</Typography>
                </Grid>
                <Grid>
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      flexFlow: "row wrap",
                    }}
                  >
                    {item.imageLinks.map((images, index) => {
                      return (
                        <Grid xs={12} md={headerPopoverType === 'whoWeAre' ? 2.4 : 3} sx={{ pt: 3, pl: 3 }}>
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
                              container
                              flexDirection={"column"}
                              sx={{
                                cursor: "pointer",
                                gap: "16px",
                              }}
                            >
                              <Grid
                                sx={{
                                  position: "relative",
                                  width: "100%",
                                  height: "100%",
                                  maxWidth: "270px",
                                  maxHeight: "135px",
                                  aspectRatio: "18 / 9",
                                  bgcolor: "white",
                                }}
                              >
                                <Image
                                  src={images}
                                  alt={item.subtitles[index]}
                                  height={headerPopoverType === 'whoWeAre' ? 105.6 : 135}
                                  width={270}
                                  style={{
                                    objectFit: "cover",
                                    objectPosition: "center center",
                                    color: "transparent",
                                    aspectRatio: "1",
                                    width:'100%'
                                  }}
                                />
                              </Grid>
                              <Grid
                                container
                                alignItems={"center"}
                                gap={"12px"}
                              >
                                {headerPopoverType === "product" && (
                                  <Grid
                                    container
                                    alignItems={"center"}
                                    width="18.56px"
                                    height="24px"
                                  >
                                    <Image
                                      src={
                                        data.data[0].iconsDir
                                          ? data.data[0].iconsDir[index]
                                          : ""
                                      }
                                      alt={
                                        data.data[0].iconsDir
                                          ? data.data[0].iconsDir[index]
                                          : ""
                                      }
                                      width={18.56}
                                      height={24}
                                      style={{
                                        height: "auto",
                                      }}
                                    />
                                  </Grid>
                                )}

                                <Typography
                                  flex={"1 1 auto"}
                                  sx={{
                                    "&:hover": {
                                      textDecoration: "underline",
                                    },
                                  }}
                                >
                                  {item.subtitles[index]}
                                </Typography>
                                <KeyboardArrowRightIcon />
                              </Grid>
                            </Grid>
                          </MuiLink>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </Container>
      </Grid>
    </Popover>
  );
}
