"use client";

import { useEffect, useState } from "react";
import Header from "./components/header";

export default function Home() {
  const [showLastLine, setShowLastLine] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const lastLineText = " what is good...";

  useEffect(() => {
    // Show the last line after 3 seconds
    const showTimer = setTimeout(() => {
      setShowLastLine(true);
      setTypedText(""); // Reset typed text
      setIsTyping(true);
    }, 2000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    let charIndex = 0;
    setTypedText(""); // Reset typed text when starting

    const typeWriter = () => {
      if (charIndex < lastLineText.length) {
        setTypedText(lastLineText.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeWriter, 80); // 80ms delay between characters
      } else {
        setIsTyping(false);
      }
    };

    typeWriter();
  }, [isTyping]);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-2 items-center">
          <img
            src="/Frame 3.svg"
            alt="Frame 3"
            className="h-150 w-auto animate-sway will-change-transform"
            style={{
              animation: 'sway 3s ease-in-out infinite'
            }}
          />

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-mono ">Pushpal </h1>
            <p className="text-sm font-mono">
              brb. i&apos;m building
            </p>

            <p className="text-sm font-mono text-center">
              good design isn&apos;t optional.
            </p>
          </div>
        </div>
      </main>

      {showLastLine && (
        <div className="flex flex-col justify-center items-center mb-96 mr-2">
          <p className="text-xs font-mono text-center">
            {typedText.includes("good") ? (
              <>
                {typedText.substring(0, typedText.indexOf("good"))}
                <em className="italic">{typedText.substring(typedText.indexOf("good"), typedText.indexOf("good") + 4)}</em>
                {typedText.substring(typedText.indexOf("good") + 4)}
              </>
            ) : (
              typedText
            )}
            <span className="animate-blink">|</span>
          </p>
        </div>
      )}
    </div>
  );
}
