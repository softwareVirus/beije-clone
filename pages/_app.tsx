import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/main.css";
import { CustomContextProvider } from "@/contexts/customContext";
import { MuiComponentContext } from "@/contexts/muiComponentContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiComponentContext>
      <CustomContextProvider>
        <Component {...pageProps} />
      </CustomContextProvider>
    </MuiComponentContext>
  );
}
