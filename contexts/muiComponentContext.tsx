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

interface HeaderPopoverProps {
  isHeaderPopoverOpen: boolean;
  setIsHeaderPopoverOpen: Dispatch<SetStateAction<boolean>>;
}

const HeaderPopoverContext = createContext<HeaderPopoverProps>({
  isHeaderPopoverOpen: false,
  setIsHeaderPopoverOpen: () => {},
});

const MuiComponentContext = ({ children }: CustomContextProviderProps) => {
  const [isDisplayOrderOpen, setIsDisplayOrderOpen] = useState<boolean>(false);
  const [isHeaderPopoverOpen, setIsHeaderPopoverOpen] =
    useState<boolean>(false);

  return (
    <HeaderPopoverContext.Provider
      value={{ isHeaderPopoverOpen, setIsHeaderPopoverOpen }}
    >
      <DisplayOrderContext.Provider
        value={{ isDisplayOrderOpen, setIsDisplayOrderOpen }}
      >
        {children}
      </DisplayOrderContext.Provider>
    </HeaderPopoverContext.Provider>
  );
};

export { MuiComponentContext, DisplayOrderContext, HeaderPopoverContext };
