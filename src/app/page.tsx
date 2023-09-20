"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/theshirtsquare.png";
import Newsletter from "@/components/newsletter/Newsletter";
import Footer from "@/components/footer/Footer";
import Social from "@/components/social/Social";

export default function Home() {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-gradient-to-r from-blue-900 via-black to-blue-800 top-0 left-0 flex flex-col w-full min-h-screen overflow-hidden relative">
      <Image
        src={Logo}
        alt="theshirtsquare_logo"
        width={150}
        height={100}
        layout="intrinsic"
        loading="lazy"
        sizes="(min-width: 720px) 150px, calc(95.5vw - 19px)"
        className="absolute items-start ml-0 top-0 md:ml-10 animate-right transition delay-700"
      />

      <div className="flex flex-col md:flex-row items-center justify-center ">
        <div className="w-full h-full flex flex-col items-center justify-center px-2 md:mt-20 mt-2 order-1 md:order-2">
          <div className="text-white text-center items-center justify-center mt-2 md:mt-14 ">
            <h1 className="text-3xl sm:text-8xl lg:text-6xl text-[#FFDAB9] font-bold animate-title transition duration-700">
              Your Style, Your Print
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl text-[#007BFF] font-bold mt-2 animate-fade-in delay-500 duration-700">
              We Bring it to Life!
            </h2>

            <div className=" w-full flex flex-col items-center justify-center mt-2 px-10 mx-auto max-w-2xl">
              <p className="mt-2 text-justify leading-relaxed mb-5 animate-fade-in px-8 duration-700 text-base">
                Wenn Du jetzt unseren Newsletter abonnierst, erfährst Du nicht
                nur als Erster von unseren neuesten Angeboten, Du bekommst auch
                einen Kapuzenpulli, einen Pullover, ein T-Shirt, eine Mütze oder
                eine Sporttasche GRATIS zu Deiner ersten Bestellung! Nutze deine
                Chance, unsere neuesten Styles zu ergattern.
              </p>
              <div className="flex flex-col gap-2 items-center animate-fade-top transition duration-1000 bg-blue-900 bg-opacity-50 p-2 rounded">
                <div className="flex px-2">
                  <input
                    type="checkbox"
                    id="consentCheckbox"
                    className="hidden"
                    onChange={() =>
                      setIsConsentGiven((prevState) => !prevState)
                    }
                    checked={isConsentGiven}
                  />
                  <label
                    htmlFor="consentCheckbox"
                    className="block w-16 h-5 sm:w-10 sm:h-6 border-2 rounded-md cursor-pointer relative"
                  >
                    {isConsentGiven && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </label>
                  <span className="text-sm sm:text-sm text-justify ml-1 px-2">
                    Ich bin damit einverstanden, Neuigkeiten und
                    Werbemitteilungen von Theshirtsquare.com zu erhalten. Wir
                    schätzen und respektieren Ihre Privatsphäre. Bitte lesen Sie
                    unsere{" "}
                    <Link href="/privacy_policy" className="text-blue-500 px-2">
                      Datenschutzrichtlinie
                    </Link>{" "}
                    für weitere Informationen.
                  </span>
                </div>
                <Newsletter
                  isDisabled={!isConsentGiven}
                  isConsentGiven={isConsentGiven}
                  setIsConsentGiven={setIsConsentGiven}
                />
              </div>
              <Social />
            </div>
          </div>
        </div>
        <div className="mt-24 md:mt-2 mx-auto  transition-all order-0 md:order-2 animate-fade-in duration-700">
          <Image
            src="/banner.png"
            alt="theshirtsquare_model"
            width={900}
            height={900}
            layout="intrinsic"
            priority
            sizes="(min-width: 2560px) calc(6.36vw + 491px), (min-width: 1060px) calc(13.04vw + 321px), (min-width: 780px) calc(93.85vw - 521px), calc(100vw - 72px)"
          />
        </div>
      </div>
      <footer className="w-full animate-fade-bottom transition duration-700">
        <Footer />
      </footer>
    </main>
  );
}
