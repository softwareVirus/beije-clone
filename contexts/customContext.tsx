import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { padProperties } from "@/types/order";
import { dailyPadProperties } from "@/types/order";
import { tamponProperties } from "@/types/order";
interface CustomContextProviderProps {
  children: ReactNode;
}

interface orderContextProps {
  order: Array<{
    padInputs: padProperties;
    dailyPadInputs: dailyPadProperties;
    tamponInputs: tamponProperties;
  }>;
  setOrder: Dispatch<
    SetStateAction<
      Array<{
        padInputs: padProperties;
        dailyPadInputs: dailyPadProperties;
        tamponInputs: tamponProperties;
      }>
    >
  >;
}
interface padContextProps {
  padInputs: padProperties;
  setPadInputs: Dispatch<SetStateAction<padProperties>>;
}

interface dailyPadContextProps {
  dailyPadInputs: dailyPadProperties;
  setDailyPadInputs: Dispatch<SetStateAction<dailyPadProperties>>;
}

interface tamponContextProps {
  tamponInputs: tamponProperties;
  setTamponInputs: Dispatch<SetStateAction<tamponProperties>>;
}

const PadContext = createContext<padContextProps>({
  padInputs: {
    standardPad: 0,
    superPad: 0,
    superPlusPad: 0,
  },
  setPadInputs: () => {},
});

const DailyPadContext = createContext<dailyPadContextProps>({
  dailyPadInputs: {
    dailyPad: 0,
    superDailyPad: 0,
  },
  setDailyPadInputs: () => {},
});

const TamponContext = createContext<tamponContextProps>({
  tamponInputs: {
    miniTampon: 0,
    standardTampon: 0,
  },
  setTamponInputs: () => {},
});

const OrderContext = createContext<orderContextProps>({
  order: [],
  setOrder: () => {},
});

const CustomContextProvider = ({ children }: CustomContextProviderProps) => {
  const [padInputs, setPadInputs] = useState<padProperties>({
    standardPad: 0,
    superPad: 0,
    superPlusPad: 0,
  });
  const [dailyPadInputs, setDailyPadInputs] = useState<dailyPadProperties>({
    dailyPad: 0,
    superDailyPad: 0,
  });
  const [tamponInputs, setTamponInputs] = useState<tamponProperties>({
    miniTampon: 0,
    standardTampon: 0,
  });
  const [order, setOrder] = useState<
    Array<{
      padInputs: padProperties;
      dailyPadInputs: dailyPadProperties;
      tamponInputs: tamponProperties;
    }>
  >([]);
  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      <PadContext.Provider value={{ padInputs, setPadInputs }}>
        <DailyPadContext.Provider value={{ dailyPadInputs, setDailyPadInputs }}>
          <TamponContext.Provider value={{ tamponInputs, setTamponInputs }}>
            {children}
          </TamponContext.Provider>
        </DailyPadContext.Provider>
      </PadContext.Provider>
    </OrderContext.Provider>
  );
};

export {
  CustomContextProvider,
  PadContext,
  DailyPadContext,
  TamponContext,
  OrderContext,
};
