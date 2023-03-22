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

interface HeaderPopoverTypeProps {
  headerPopoverType: string;
  setHeaderPopoverType: Dispatch<SetStateAction<string>>;
}

const HeaderPopoverTypeContext = createContext<HeaderPopoverTypeProps>({
  headerPopoverType: "product",
  setHeaderPopoverType: () => {},
});

const MuiComponentContext = ({ children }: CustomContextProviderProps) => {
  const [isDisplayOrderOpen, setIsDisplayOrderOpen] = useState<boolean>(false);
  const [isHeaderPopoverOpen, setIsHeaderPopoverOpen] =
    useState<boolean>(false);
  const [headerPopoverType, setHeaderPopoverType] = useState<string>("product");

  return (
    <HeaderPopoverTypeContext.Provider
      value={{ headerPopoverType, setHeaderPopoverType }}
    >
      <HeaderPopoverContext.Provider
        value={{ isHeaderPopoverOpen, setIsHeaderPopoverOpen }}
      >
        <DisplayOrderContext.Provider
          value={{ isDisplayOrderOpen, setIsDisplayOrderOpen }}
        >
          {children}
        </DisplayOrderContext.Provider>
      </HeaderPopoverContext.Provider>
    </HeaderPopoverTypeContext.Provider>
  );
};

export {
  MuiComponentContext,
  DisplayOrderContext,
  HeaderPopoverContext,
  HeaderPopoverTypeContext,
};
