import React, { ReactNode, useContext } from "react";
import { Grid, Box, Typography, Divider, IconButton } from "@mui/material";
import { HeaderPopoverTypeContext } from "@/contexts/muiComponentContext";
import popoverMenuData from "../popoverMenuData";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Image from "next/image";
import Button from "@mui/material/Button";

interface Props {
  children: ReactNode;
}
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
const ProductContainer = ({ children }: Props) => {
  return (
    <Grid container spacing={4} sx={{ flexFlow: "row wrap" }}>
      <Grid item xs={12} md={10} sx={{ mb: 4 }}>
        {children}
      </Grid>
    </Grid>
  );
};

const MobilePageTemplate = () => {
  const { headerPopoverType, setHeaderPopoverType } = useContext(
    HeaderPopoverTypeContext
  );
  const data = popoverMenuData(headerPopoverType);
  console.log(headerPopoverType, data);
  return (
    <Grid>
      {data.data.map((item, index) => {
        return (
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            key={index + item.title}
          >
            <Box>
              <Grid
                sx={{
                  pb: headerPopoverType !== "product" ? 2 : 0,
                  ...(index === 1
                    ? {
                        mt: 4,
                        pl: 4,
                        pr: 4,
                      }
                    : {}),
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    gap: "12px",
                    ...(index === 1
                      ? {
                          mt: 2,
                          mb: 2,
                        }
                      : {}),
                  }}
                >
                  {index === 0 && (
                    <IconButton
                      sx={{ p: 0 }}
                      onClick={() => {
                        setHeaderPopoverType("");
                      }}
                    >
                      <KeyboardArrowLeftIcon />
                    </IconButton>
                  )}
                  {item.title}
                </Typography>
              </Grid>
              {index === 0 && (
                <Box
                  sx={{
                    pl: 4,
                    pr: 4,
                    mt: headerPopoverType === "product" ? 2 : 0,
                    mb: headerPopoverType === "product" ? 2 : 0,
                  }}
                >
                  <hr
                    style={{
                      backgroundColor: "rgb(52, 49, 49)",
                      opacity: "0.3",
                    }}
                  />
                </Box>
              )}
              <Box
                sx={{
                  pl: 4,
                  pr: 4,
                }}
              >
                <Grid container spacing={1}>
                  {item.subtitles.map((subtitle, index1) => {
                    return (
                      <Grid item xs={12} key={index1 + item.title + subtitle}>
                        <Grid
                          sx={{
                            p: "12px 0",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          {item.iconsDir.length !== 0 && (
                            <Image
                              src={item.iconsDir[index1]}
                              alt={item.iconsDir[index1]}
                              width={22.01}
                              height={24}
                              style={{ stroke: "#343131" }}
                            />
                          )}
                          <Typography
                            sx={{
                              "&:hover": {
                                borderBottom: "1px solid rgba(0, 0, 0, 0.9)",
                                transition: "all 0.7s ease",
                              },
                            }}
                          >
                            {subtitle}
                          </Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
              {index === 0 && headerPopoverType === "product" && (
                <Box
                  sx={{
                    pl: 4,
                    pr: 4,
                    mt: 2,
                  }}
                >
                  <hr
                    style={{
                      backgroundColor: "rgb(52, 49, 49)",
                      opacity: "0.3",
                    }}
                  />
                </Box>
              )}
            </Box>
          </Box>
        );
      })}
      {headerPopoverType === "product" && (
        <Box
          sx={{
            pl: 4,
            pr: 4,
            mt: headerPopoverType === "product" ? 1 : 0,
            mb: headerPopoverType === "product" ? 1 : 0,
          }}
        >
          <hr
            style={{
              backgroundColor: "rgb(52, 49, 49)",
              opacity: "0.3",
            }}
          />
        </Box>
      )}
      <Button sx={{
        ml:4,
        p:'10px 8px 8px'
      }}>
        <Image 
            src={'./header_icons/setting.svg'}
            alt={'setting'}
            width={24}
            height={24}
            style={{marginRight:'8px'}}
        />
        Kendi Paketini Oluştur
      </Button>
    </Grid>
  );
};

const MobilePage = () => {
  const { headerPopoverType, setHeaderPopoverType } = useContext(
    HeaderPopoverTypeContext
  );
  return (
    <>
      {headerPopoverType === "product" ? (
        <ProductContainer>
          <MobilePageTemplate />
        </ProductContainer>
      ) : (
        <MobilePageTemplate />
      )}
    </>
  );
};
export default MobilePage;
