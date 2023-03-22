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
interface displayOrderProps {
  isDisplayOrderOpen: boolean;
  setIsDisplayOrderOpen: Dispatch<SetStateAction<boolean>>;
}

const DisplayOrderContext = createContext<displayOrderProps>({
  isDisplayOrderOpen: false,
  setIsDisplayOrderOpen: () => {},
});

const MuiComponentContext = ({ children }: CustomContextProviderProps) => {
  const [isDisplayOrderOpen, setIsDisplayOrderOpen] = useState<boolean>(false);

  return (
    <DisplayOrderContext.Provider
      value={{ isDisplayOrderOpen, setIsDisplayOrderOpen }}
    >
      {children}
    </DisplayOrderContext.Provider>
  );
};

export { MuiComponentContext, DisplayOrderContext };
