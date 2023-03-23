import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { Grid, Box, Button } from "@mui/material";
import {
  PadContext,
  DailyPadContext,
  TamponContext,
} from "@/contexts/customContext";
import Image from "next/image";
import { styles } from "@/utils/style";
import InfoSection from "./display_order/InfoSection";
import { sizeOfOrder } from "./display_order/calculateCost";
import OrderCard from "./display_order/OrderCard";
import OrderButton from "./display_order/OrderButton";

const DisplayOrder = () => {
  const { padInputs, setPadInputs } = useContext(PadContext);
  const { dailyPadInputs, setDailyPadInputs } = useContext(DailyPadContext);
  const { tamponInputs, setTamponInputs } = useContext(TamponContext);
  const { sizeDailyPadOrder, sizePadOrder, sizeTamponOrder } = sizeOfOrder({ padInputs, dailyPadInputs,tamponInputs });

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
          <InfoSection />
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
        <OrderButton
          padInputs={padInputs}
          dailyPadInputs={dailyPadInputs}
          tamponInputs={tamponInputs}
        />
      </Grid>
    </Grid>
  );
};

export default DisplayOrder;
