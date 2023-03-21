import { Grid, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";

const linkNames: string[] = [
  "Paketler",
  "Blog",
  "Deneme Paketi",
  "Sıkça Sorulan Sorular",
  "Ekibimize Katıl",
  "Biz Kimiz?",
  "",
];

const linkDirections: string[][] = [
  ["_self", "/packets"],
  ["_blank", "https://www.dongu.beije.co/"],
  ["_self", "/product/trial"],
  ["_self", "/know-us/faqs"],
  ["_blank", "https://www.linkedin.com/company/beije-tr/"],
  ["_self", "/know-us/why-beije"],
  ["_self", "/custom-packet"],
];

const BeijeLinks = () => {
  return (
    <Grid
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(4, rem)",
        gap: "1rem",
        m: {
          md:'0',
          xs:'24px auto'
        },
        textAlign: {
          md:'left',
          xs: 'center'
        },
      }}
    >
      {linkNames.map((item, index) => {
        return (
          <Grid sx={{ cursor: "pointer", color: "white",height:'32px' }} key={item + index}>
            <MuiLink
              href={linkDirections[index][0]}
              target={linkDirections[index][0]}
              component={Link}
              sx={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Typography color='inherit'>
                {item}
              </Typography>
            </MuiLink>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BeijeLinks;
