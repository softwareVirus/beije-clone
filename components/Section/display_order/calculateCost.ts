import { useContext } from "react";
import {
  PadContext,
  DailyPadContext,
  TamponContext,
} from "@/contexts/customContext";

export const sizeOfOrder = () => {
  const { padInputs } = useContext(PadContext);
  const { dailyPadInputs } = useContext(DailyPadContext);
  const { tamponInputs } = useContext(TamponContext);

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
  return { sizePadOrder, sizeDailyPadOrder, sizeTamponOrder };
};
