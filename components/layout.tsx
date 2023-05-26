import { DM_Sans } from "next/font/google";
import Footer from "./footer";
import Meta from "./meta";

const dmSans = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
});

export default function Layout({ preview, children, logo }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --dm-sans-font: ${dmSans.style.fontFamily};
          }
        `}
      </style>
      <Meta />
      <div className="min-h-screen font-primary">
        <main>{children}</main>
      </div>
      <Footer logo={logo} />
    </>
  );
}
