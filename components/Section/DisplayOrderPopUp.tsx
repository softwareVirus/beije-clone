import React, { useContext } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import {
  PadContext,
  DailyPadContext,
  TamponContext,
} from "@/contexts/customContext";
import Modal from "@mui/material/Modal";
import { DisplayOrderContext } from "@/contexts/muiComponentContext";
import { styles } from "@/utils/style";
import OrderButton from "./display_order/OrderButton";
import { sizeOfOrder } from "./display_order/calculateCost";
import ClearIcon from "@mui/icons-material/Clear";
import InfoSection from "./display_order/InfoSection";
import Image from "next/image";
import OrderCard from "./display_order/OrderCard";

export default function DisplayOrderPopUp() {
  const { isDisplayOrderOpen, setIsDisplayOrderOpen } =
    useContext(DisplayOrderContext);
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
  const handleClose = () => setIsDisplayOrderOpen(false);

  return (
    <Modal
      open={isDisplayOrderOpen}
      onClose={handleClose}
      sx={{
        overflowY:'scroll'
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      hideBackdrop={false}
    >
      <Grid
        sx={{
          ...styles.displayBox,
          padding: "40px 27px",
          width: "375px",
          position: "absolute",
          top: "54px",
          gap: "40px",
          bgcolor: "rgb(247, 246, 245)",
          right: 0,
          left: 0,
          ml: "auto",
          mr: "auto",
        }}
      >
        <Box
          sx={{
            ...styles.displayBox,
            gap: "1rem",
          }}
        >
          <Grid container justifyContent={"space-between"}>
            <Typography variant="mobileH2">Özel Paketin</Typography>
            <IconButton
              onClick={handleClose}
              sx={{
                p: 0,
              }}
            >
              <ClearIcon />
            </IconButton>
          </Grid>
        </Box>
        <InfoSection />
        <Image
          src={
            "https://beije.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpacket.c4ec1969.png&w=640&q=75"
          }
          width={402}
          height={201}
          style={{
            width: "100%",
            height: "auto",
          }}
          alt="beije image"
        />
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
    </Modal>
  );
}
