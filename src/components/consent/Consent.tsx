"use client";
import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

const Consent = () => {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    setShowContent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowContent(true);
    setCookie("localConsent", "true", {});
  };
  if (showContent) {
    return null;
  }

  return (
    <div className="fixed inset bg-slate-400 bg-opacity-70 z-[5000] ">
      <div className="fixed bottom-0 left-0 flex items-center justify-between px-4 py-8 text-white">
        <span>
          This website used cookies to improve user experience. By using our
          website you consent to all the Terms of Usage in accordance with our
          Privacy Policy
        </span>
        <div></div>
        <button
          className="bg-blue-500 py-2 px-10 round text-white"
          onClick={() => acceptCookie()}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default Consent;
