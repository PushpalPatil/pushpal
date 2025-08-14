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
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-16 gap-8 sm:p-8 sm:pb-20 sm:gap-16 sm:p-20">
      <Header />
      <main className="flex flex-col gap-6 sm:gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center">
          <img
            src="/Frame 3.svg"
            alt="Frame 3"
            className="h-55 w-auto sm:h-150 animate-sway will-change-transform"
            style={{
              animation: 'sway 3s ease-in-out infinite'
            }}
          />

          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h1 className="text-2xl sm:text-4xl font-mono">Pushpal </h1>
            <p className="text-xs sm:text-sm font-mono">
              good design isn&apos;t optional.
              
            </p>

            {showLastLine && (

              <p className="text-xs font-mono text-center sm:text-left mt-8 sm:mt-10">
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

            )}
   
          </div>
        </div>
      </main>
    </div>
  );
}
