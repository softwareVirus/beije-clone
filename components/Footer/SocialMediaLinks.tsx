import { Grid, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const socialMedias: string[] = [
  "Facebook",
  "Instagram",
  "Twitter",
  "Linkedin",
  "Spotify",
];

const linkDirections: string[] = [
  "https://www.facebook.com/beijewomen/",
  "https://www.instagram.com/beijewomen/",
  "https://twitter.com/beijewomen",
  "https://tr.linkedin.com/company/beije-tr",
  "https://open.spotify.com/user/ma20bga4ewhwt96kx1p92f2uv",
];

const SocialMediaLinks = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        marginLeft: "40px",
        [theme.breakpoints.down("md")]: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          ml: 0,
        },
      })}
    >
      {socialMedias.map((item, index) => {
        return (
          <MuiLink
            href={linkDirections[index]}
            target={"_blank"}
            component={Link}
            sx={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Image
                src={`./social_media/${item.toLowerCase()}.svg`}
                alt={item}
                width={25}
                height={25}
              />
              {matches && <Typography color="white">{item}</Typography>}
            </Grid>
          </MuiLink>
        );
      })}
    </Grid>
  );
};

export default SocialMediaLinks;
