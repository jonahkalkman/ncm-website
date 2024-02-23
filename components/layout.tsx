import { PT_Sans } from "next/font/google";
import Footer from "./footer";
import Meta from "./meta";

const dmSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
});

export default function Layout({ children, logo }) {
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
      <div className="font-primary z-50 relative bg-white">
        <main>{children}</main>
      </div>
      <Footer logo={logo} />
    </>
  );
}
