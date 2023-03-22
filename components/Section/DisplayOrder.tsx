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
import {
  sizeDailyPadOrder,
  sizePadOrder,
  sizeTamponOrder,
} from "./display_order/calculateCost";
import OrderCard from "./display_order/OrderCard";

const DisplayOrder = () => {
  const { padInputs, setPadInputs } = useContext(PadContext);
  const { dailyPadInputs, setDailyPadInputs } = useContext(DailyPadContext);
  const { tamponInputs, setTamponInputs } = useContext(TamponContext);

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
