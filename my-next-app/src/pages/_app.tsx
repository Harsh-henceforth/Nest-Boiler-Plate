// libs
import { Provider } from "react-redux";

// components
import LayoutSelector from "@/layout";

// styles
import "@/styles/globals.css";

// utils and constant
import type { AppProps } from "next/app";

// redux
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LayoutSelector>
        <Component {...pageProps} />
      </LayoutSelector>
    </Provider>
  );
}
