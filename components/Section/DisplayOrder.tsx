import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { Grid, Box, Button } from "@mui/material";
import {
  PadContext,
  DailyPadContext,
  TamponContext,
} from "@/contexts/customContext";
import Image from "next/image";
import { padProperties } from "@/types/order";
import { dailyPadProperties } from "@/types/order";
import { tamponProperties } from "@/types/order";
import { styles } from "@/utils/style";

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

const DisplayOrder = () => {
  const { padInputs, setPadInputs } = useContext(PadContext);
  const { dailyPadInputs, setDailyPadInputs } = useContext(DailyPadContext);
  const { tamponInputs, setTamponInputs } = useContext(TamponContext);
  const sizePadOrder: number =
    (padInputs.standardPad !== 0 ? 1 : 0) +
    (padInputs.superPad !== 0 ? 1 : 0) +
    (padInputs.superPlusPad !== 0 ? 1 : 0);
  const sizeDailyPadOrder: number =
    (dailyPadInputs.dailyPad !== 0 ? 1 : 0) +
    (dailyPadInputs.superDailyPad !== 0 ? 1 : 0);
  const sizeTamponOrder: number =
    (tamponInputs.miniTampon !== 0 ? 1 : 0) +
    (tamponInputs.standardTampon !== 0 ? 1 : 0);
  const handleDeletePadOrder = () => {
    setPadInputs({
      standardPad: 0,
      superPad: 0,
      superPlusPad: 0,
    });
  };
  const handleDeleteDailyPadOrder = () => {
    setDailyPadInputs({
      dailyPad: 0,
      superDailyPad: 0,
    });
  };

  const handleDeleteTamponOrder = () => {
    setTamponInputs({
      miniTampon: 0,
      standardTampon: 0,
    });
  };
  return (
    <Grid>
      <Grid
        sx={{
          ...styles.displayBox,
          width: "466px",
          p: 4,
          gap: "40px",
          bgcolor: "rgb(255, 255, 255)",
          borderRadius: "16px",
        }}
      >
        <Grid
          sx={{
            ...styles.displayBox,
            ...styles.firstBox,
            width: "100%",
            gap: "1.5rem",
          }}
        >
          <Typography variant="h3">Özel Paketin</Typography>
          <Box
            sx={{
              ...styles.displayBox,
              flexDirection: "row",
              alignItems: "center",
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
          <Image
            src={
              "https://beije.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpacket.c4ec1969.png&w=640&q=75"
            }
            width={402}
            height={201}
            alt="beije image"
          />
        </Grid>
        <Box
          sx={{
            ...styles.displayBox,
            width: "100%",
            gap: "1em",
            filter:
              "drop-shadow(rgba(0, 0, 0, 0.03) 0px 1px 3px) drop-shadow(rgba(0, 0, 0, 0.05) 0px 5px 15px)",
          }}
        >
          {sizePadOrder !== 0 ? (
            <OrderCard
              title={"Ped Paketleri"}
              handleFunction={handleDeletePadOrder}
              order={{ dailyPadInputs, padInputs, tamponInputs }}
              type={"pad"}
              sizePadOrder={sizePadOrder}
              sizeDailyPadOrder={sizeDailyPadOrder}
              sizeTamponOrder={sizeTamponOrder}
            />
          ) : null}
          {sizeDailyPadOrder !== 0 ? (
            <OrderCard
              title={"Günlük Ped Paketleri"}
              handleFunction={handleDeleteDailyPadOrder}
              order={{ dailyPadInputs, padInputs, tamponInputs }}
              type={"dailyPad"}
              sizePadOrder={sizePadOrder}
              sizeDailyPadOrder={sizeDailyPadOrder}
              sizeTamponOrder={sizeTamponOrder}
            />
          ) : null}
          {sizeTamponOrder !== 0 ? (
            <OrderCard
              title={"Tampon Paketleri"}
              handleFunction={handleDeleteTamponOrder}
              order={{ dailyPadInputs, padInputs, tamponInputs }}
              type={"tampon"}
              sizePadOrder={sizePadOrder}
              sizeDailyPadOrder={sizeDailyPadOrder}
              sizeTamponOrder={sizeTamponOrder}
            />
          ) : null}
        </Box>
        <Button
          variant="contained"
          color="primary"
          disabled={
            sizePadOrder === 0 &&
            sizeDailyPadOrder === 0 &&
            sizeTamponOrder === 0
          }
        >
          Sepete Ekle (₺
          {sizePadOrder === 0 &&
          sizeDailyPadOrder === 0 &&
          sizeTamponOrder === 0
            ? "0,00"
            : Math.floor(
                (padInputs.standardPad * 2.835 +
                  padInputs.superPad * 3.222 +
                  padInputs.superPlusPad * 3.607 +
                  dailyPadInputs.dailyPad * 1.1338 +
                  dailyPadInputs.superDailyPad * 1.584 +
                  tamponInputs.miniTampon * 3.289 +
                  tamponInputs.standardTampon * 3.633) *
                  100
              ) / 100}
          )
        </Button>
      </Grid>
    </Grid>
  );
};

export default DisplayOrder;
