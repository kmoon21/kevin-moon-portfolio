"use client";

import { useEffect, useState } from "react";

export default function TypewriterLine({ text }: { text: string }) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setDisplay(text);
      setDone(true);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplay(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 14);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="mb-2 min-h-[1.55em] max-w-xl text-lg text-ink-soft">
      {display}
      <span
        className={`ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-ink-soft ${
          done ? "animate-blink" : ""
        }`}
      />
    </p>
  );
}
