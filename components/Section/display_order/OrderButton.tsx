import React, { useContext } from "react";
import { sizeOfOrder } from "./calculateCost";
import { padProperties } from "@/types/order";
import { dailyPadProperties } from "@/types/order";
import { tamponProperties } from "@/types/order";
import { Button } from "@mui/material";
import {
  OrderContext,
  PadContext,
  DailyPadContext,
  TamponContext,
} from "@/contexts/customContext";
interface OrderButtonProps {
  padInputs: padProperties;
  dailyPadInputs: dailyPadProperties;
  tamponInputs: tamponProperties;
}

const OrderButton = ({
  padInputs,
  dailyPadInputs,
  tamponInputs,
}: OrderButtonProps) => {
  const { sizeDailyPadOrder, sizePadOrder, sizeTamponOrder } = sizeOfOrder({
    padInputs,
    dailyPadInputs,
    tamponInputs,
  });
  const { order, setOrder } = useContext(OrderContext);
  const { setPadInputs } = useContext(PadContext);
  const { setDailyPadInputs } = useContext(DailyPadContext);
  const { setTamponInputs } = useContext(TamponContext);

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
    <Button
      variant="contained"
      color="primary"
      disabled={
        sizePadOrder === 0 && sizeDailyPadOrder === 0 && sizeTamponOrder === 0
      }
      onClick={() => {
        const newOrder: Array<{
          padInputs: padProperties;
          dailyPadInputs: dailyPadProperties;
          tamponInputs: tamponProperties;
        }> = [
          ...order,
          {
            padInputs: padInputs,
            dailyPadInputs: dailyPadInputs,
            tamponInputs: tamponInputs,
          },
        ];
        setOrder(newOrder);
        handleDeletePadOrder();
        handleDeleteDailyPadOrder();
        handleDeleteTamponOrder();
      }}
    >
      Sepete Ekle (₺
      {sizePadOrder === 0 && sizeDailyPadOrder === 0 && sizeTamponOrder === 0
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
  );
};

export default OrderButton;
