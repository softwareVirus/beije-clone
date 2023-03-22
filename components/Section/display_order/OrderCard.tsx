import React from "react";
import { padProperties } from "@/types/order";
import { dailyPadProperties } from "@/types/order";
import { tamponProperties } from "@/types/order";
import { Grid, Button, Typography } from "@mui/material";

interface orderProperties {
  padInputs: padProperties;
  dailyPadInputs: dailyPadProperties;
  tamponInputs: tamponProperties;
}
interface OrderCardProps {
  title: string;
  handleFunction: () => void;
  order: orderProperties;
  type: "pad" | "dailyPad" | "tampon";
  sizePadOrder: number;
  sizeDailyPadOrder: number;
  sizeTamponOrder: number;
}

const OrderCard = ({
  title,
  handleFunction,
  order,
  type,
  sizePadOrder = 0,
  sizeDailyPadOrder = 0,
  sizeTamponOrder = 0,
}: OrderCardProps) => {
  const orderType = {
    pad: ["Standart Ped", "Süper Ped", "Süper+ Ped"],
    dailyPad: ["Günlük Ped", "Süper Günlük Ped"],
    tampon: ["Mini Tampon", "Standart Tampon"],
  };
  return (
    <Grid
      sx={{
        borderRadius: "0.5rem",
        padding: "1.5rem",
        width: "100%",
        background: "white",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 500,
          fontSize: "18px",
          lineHeight: "140%",
          letterSpacing: "-0.015em",
          mb: 0.5,
        }}
      >
        {title}
      </Typography>
      <Typography variant="body2">
        {type === "pad"
          ? (order.padInputs.standardPad !== 0
              ? `${order.padInputs.standardPad} ${orderType[type][0]}`
              : "") +
            (sizePadOrder === 3 ? ", " : "") +
            (order.padInputs.superPad !== 0
              ? `${order.padInputs.superPad} ${orderType[type][1]}`
              : "") +
            (sizePadOrder >= 2 ? " ve " : "") +
            (order.padInputs.superPlusPad !== 0
              ? `${order.padInputs.superPlusPad} ${orderType[type][2]}`
              : "")
          : type === "dailyPad"
          ? (order.dailyPadInputs.dailyPad !== 0
              ? `${order.dailyPadInputs.dailyPad} ${orderType[type][0]}`
              : "") +
            (sizeDailyPadOrder >= 2 ? " ve " : "") +
            (order.dailyPadInputs.superDailyPad !== 0
              ? `${order.dailyPadInputs.superDailyPad} ${orderType[type][1]}`
              : "")
          : (order.tamponInputs.miniTampon !== 0
              ? `${order.tamponInputs.miniTampon} ${orderType[type][0]}`
              : "") +
            (sizeTamponOrder >= 2 ? " ve " : "") +
            (order.tamponInputs.standardTampon !== 0
              ? `${order.tamponInputs.standardTampon} ${orderType[type][1]}`
              : "")}
      </Typography>
      <Button variant="text" onClick={handleFunction}>
        Paketten Çıkar
      </Button>
    </Grid>
  );
};

export default OrderCard;
