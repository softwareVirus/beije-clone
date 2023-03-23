import React, { useContext } from "react";
import {
  Popover,
  Grid,
  Slide,
  Container,
  Box,
  Typography,
  Button,
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
      <Grid
        onMouseLeave={handlePopoverClose}
        sx={{
          backgroundColor: "#f5f5f5 !important",
        }}
      >
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
          <Grid container spacing={4}>
            <Grid item xs={12} md={headerPopoverType === "product" ? 10 : 12}>
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
                    <Grid
                      container
                      justifyContent={"space-between"}
                      sx={{ mt: index === 1 ? 4 : 0 }}
                    >
                      <Typography variant="h5">{item.title}</Typography>
                      {item.title === "Paketler" && (
                        <Button sx={{ p: "10px 8px 8px" }}>
                          <Grid container width={"fit-content"} gap={"12px"}>
                            Tüm Paketler
                            <KeyboardArrowRightIcon />
                          </Grid>
                        </Button>
                      )}
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
                            <Grid
                              xs={12}
                              md={
                                headerPopoverType === "whoWeAre" ||
                                (headerPopoverType === "product" &&
                                  item.title === "Paketler")
                                  ? 2.4
                                  : 3
                              }
                              sx={{ pt: 3, pl: 3 }}
                            >
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
                                      sizes={"100vw"}
                                      fill
                                      style={{
                                        objectFit: "cover",
                                        objectPosition: "center center",
                                        color: "transparent",
                                        aspectRatio: "1",
                                        width: "100%",
                                      }}
                                    />
                                  </Grid>
                                  <Grid
                                    display={"flex"}
                                    alignItems={"center"}
                                    gap={"12px"}
                                  >
                                    {headerPopoverType === "product" &&
                                      data.data[0].iconsDir.length !== 0 && (
                                        <Grid
                                          container
                                          alignItems={"center"}
                                          width="18.56px"
                                          height="24px"
                                        >
                                          <Image
                                            src={
                                              item.iconsDir
                                                ? item.iconsDir[index]
                                                : ""
                                            }
                                            alt={
                                              item.iconsDir
                                                ? item.iconsDir[index]
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
                                        whiteSpace: "break-spaces",
                                      }}
                                    >
                                      {item.subtitles[index]}
                                    </Typography>
                                    <KeyboardArrowRightIcon  sx={{width:'15.9px'}}/>
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
            </Grid>
            {headerPopoverType === "product" && (
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
                      <Grid
                        container
                        alignItems={"center"}
                        width="18.56px"
                        height="24px"
                      >
                        <Image
                          src={'./header_icons/setting.svg'}
                          alt={'setting'}
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
                          letterSpacing: '-0.03em'
                        }}
                      >
                        Kendi Paketini oluştur
                      </Typography>
                      <KeyboardArrowRightIcon sx={{width:'15.9px'}}/>
                    </Box>
                  </Grid>
                </MuiLink>
              </Grid>
            )}
          </Grid>
        </Container>
      </Grid>
    </Popover>
  );
}
