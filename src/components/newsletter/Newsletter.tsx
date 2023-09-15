import { getPlaneKeyframes } from "@/lib/getPlaneKeyframes";
import { getTrailsKeyframes } from "@/lib/getTrailsKeyframes";
import {
  EnvelopeIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { gsap } from "gsap";
import { FormEvent, useRef, useState } from "react";

interface NewsletterProps {
  isDisabled: boolean;
  isConsentGiven: boolean;
  setIsConsentGiven: React.Dispatch<React.SetStateAction<boolean>>;
}

const Newsletter: React.FC<NewsletterProps> = ({
  isDisabled,
  isConsentGiven,
}) => {
  const [input, setInput] = useState("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");
  const [active, setActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { to, fromTo, set } = gsap;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = input;
    const button = buttonRef.current;

    if (!email || !button) return;

    if (!active) {
      setActive(true);
      to(button, {
        keyframes: getPlaneKeyframes(set, fromTo, button, setActive, setInput),
      });
      to(button, { keyframes: getTrailsKeyframes(button) });
    }

    if (!isConsentGiven) {
      setErrorMessage(
        "You must agree to receive newsletters and promotional emails before subscribing.",
      );
      return;
    }

    const res = await fetch("/api/addSubscription", {
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const data = await res.json();

    if (data.error) {
      setErrorMessage(
        data.error.detail || "This email address is already subscribed.",
      );
      setSuccessMessage("");

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return;
    }

    setSuccessMessage(
      `Thank you ${email} for subscribing! Please check your email to confirm your subscription.`,
    );

    setErrorMessage("");
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <div className="flex flex-col px-5 space-y-2 max-w-[400px] sm:max-w-[500px] animate-fade-top duration-1000">
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <div className="group flex items-center gap-x-4 py-1 pl-1 pr-1 rounded-[9px] bg-[#303030] hover:bg-[#34414a] shadow-outline-gray hover:shadow-transparent focus-within:bg-[#34414a] focus-within:!shadow-outline-gray-focus transition-all duration-300">
          <EnvelopeIcon className="w-6 h-6 text-[#4B4C52] group-focus-within:text-white group-hover:text-white transition-colors duration-300" />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Email address"
            required
            type="email"
            className="flex-1 text-white text-xs sm:text-base outline-none placeholder-[#4B4C52] focus:placeholder-white bg-transparent focus:bg-transparent focus:outline-none placeholder:duration-300 "
          />
          <button
            ref={buttonRef}
            disabled={!input || !isConsentGiven || isDisabled}
            type="submit"
            className={`${
              active && "active"
            } disabled:!bg-[#17141F] disabled:grayscale-[65%] disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base`}
          >
            <span className="default">Subscribe</span>
            <span className="success">
              <svg viewBox="0 0 16 16">
                <polyline points="3.75 9 7 12 13 5"></polyline>
              </svg>
              Done
            </span>
            <svg className="trails" viewBox="0 0 33 64">
              <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
              <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div className="plane">
              <div className="left"></div>
              <div className="right"></div>
            </div>
          </button>
        </div>
      </form>

      <div
        className={`relative ${
          successMessage || errorMessage ? "block" : "hidden"
        }`}
      >
        {(successMessage || errorMessage) && (
          <div className="flex items-start space-x-2 bg-[#34414a] shadow-outline-gray text-white rounded-[9px] py-2 px-6 animate-fade-bottom absolute">
            <div className="h-6 w-6 bg-[#1f2b53] flex items-center justify-center rounded-full border border-[#1f2b53] flex-shrink-0">
              {successMessage && (
                <CheckIcon className="h-4 w-4 text-[#0000ff]" />
              )}
              {errorMessage && <XMarkIcon className="h-4 w-4 text-[#ff0000]" />}
            </div>
            <div className="text-xs sm:text-sm text-[#8b8d95]">
              {successMessage && <p>{successMessage}</p>}
              {errorMessage && <p>{errorMessage}</p>}
            </div>
            <XMarkIcon className="h-5 w-5 cursor-pointer flex-shrink-0 text-[#0000ff]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
