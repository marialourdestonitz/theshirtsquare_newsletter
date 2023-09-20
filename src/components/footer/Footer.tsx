"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-transparent items-center justify-center mx-auto w-full h-full flex flex-col md:flex-row bottom-0 py-2 text-white text-sm  gap-4  ">
      <span className="order-1 md:order-1 text-[10px] text-sm ">
        &copy;-2023 Theshirtsquare. All rights reserved.
      </span>
      <Link href="/privacy_policy " className="order-0 md:order-2 ">
        <span className="">Datenschutzrichtlinie</span>
      </Link>
      <Link href="/impressum" className="order-0 md:order-2 ">
        <span className="">Impressum</span>
      </Link>
    </div>
  );
};

export default Footer;
