import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface CustomContextProviderProps {
  children: ReactNode;
}

interface padProperties {
  standardPad: number;
  superPad: number;
  superPlusPad: number;
}

interface dailyPadProperties {
  dailyPad: number;
  superDailyPad: number;
}

interface tamponProperties {
  miniTampon: number;
  standardTampon: number;
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

  return (
    <PadContext.Provider value={{ padInputs, setPadInputs }}>
      <DailyPadContext.Provider value={{ dailyPadInputs, setDailyPadInputs }}>
        <TamponContext.Provider value={{ tamponInputs, setTamponInputs }}>
          {children}
        </TamponContext.Provider>
      </DailyPadContext.Provider>
    </PadContext.Provider>
  );
};

export { CustomContextProvider, PadContext, DailyPadContext, TamponContext };