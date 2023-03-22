import React from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "@/utils/style";
import Image from "next/image";

const InfoSection = () => {
  return (
    <Box
      sx={{
        ...styles.displayBox,
        flexDirection: "row",
        alignItems: "center",
        boxSizing: 'border-box',
        boxShadow:
          "rgba(0, 0, 0, 0.03) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 5px 15px",
        borderRadius: "8px",
        padding: "12px 16px",
        gap: 2,
      }}
    >
      <Image src="./again.svg" width={18} height={18} alt="again" />
      <Typography>2 ayda 1 gönderim</Typography>
    </Box>
  );
};

export default InfoSection;
