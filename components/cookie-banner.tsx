"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "../lib/storageHelper";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);
  return (
    <div
      className={`mx-2 md:mx-auto my-10  max-w-max md:max-w-screen-sm
                  fixed bottom-0 left-0 right-0 
                  flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                  bg-primary rounded-lg shadow z-50
                  ${cookieConsent !== null ? "hidden" : "flex"}`}
    >
      <div className="text-cente text-white-200">
        <p className="text-sm">
          We maken gebruik van <Link href="/cookiebeleid">cookies</Link> om je
          ervaring op onze website te verbeteren.
        </p>
      </div>

      <div className="flex gap-1">
        <button
          className="px-5 py-2 text-black rounded-md border-gray-900"
          onClick={() => setCookieConsent(false)}
        >
          Weiger
        </button>
        <button
          className="bg-white px-5 py-2 text-black rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
          onClick={() => setCookieConsent(true)}
        >
          Accepteer
        </button>
      </div>
    </div>
  );
}
