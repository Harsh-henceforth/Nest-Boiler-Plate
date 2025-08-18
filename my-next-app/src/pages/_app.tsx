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
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
   <Suspense fallback={<h1>eree</h1>}>
    <Provider store={store}>
      <LayoutSelector>
        <Component {...pageProps} />
      </LayoutSelector>
    </Provider>
    </Suspense>
  );
}
