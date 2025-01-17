import { Html, Head, Main, NextScript } from "next/document";
import GoogleAnalytics from "../components/google-analytics";
import CookieBanner from "../components/cookie-banner";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
