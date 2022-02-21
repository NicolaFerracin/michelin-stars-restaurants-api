import type { AppProps } from "next/app";
import "../styles/base.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
