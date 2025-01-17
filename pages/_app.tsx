import { AppProps } from "next/app";
import "../styles/index.css";
import CookieBanner from "../components/cookie-banner";
import GoogleAnalytics from "../components/google-analytics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-H65JS01W8H" />
      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
}

export default MyApp;
