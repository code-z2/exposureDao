import "../styles/globals.css";
import type { AppProps } from "next/app";
import Connect from "../components/Layout/Login";
import Navigation from "../components/Layout/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:bg-gray-800">
      <Connect />
      <Component {...pageProps} />
      <Navigation />
    </div>
  );
}

export default MyApp;
