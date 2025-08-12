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
        <h1 className="text-4xl font-mono"> Pushpal </h1>
        <p className="text-sm font-mono">
          brb. i'm building
        </p>

        <p className="text-sm font-mono text-center">
          good design isn&apos;t optional.
        </p>

      </main>

      {showLastLine && (
        <div className="flex flex-col justify-center items-center mb-105">
          <p className="text-xs font-mono text-center">
            {typedText}
            <span className="animate-blink">|</span>
          </p>
        </div>
      )}
    </div>
  );
}
