import React, { useEffect, useState } from "react";

type Props = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
};

const Typewriter: React.FC<Props> = ({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1400,
  className = "",
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const typingMs = Math.max(20, typingSpeed);
    const pauseMs = Math.max(200, pause);
    const pauseRef = { current: 0 } as { current: number };

    const iv = window.setInterval(() => {
      setSubIndex((prev) => {
        const currentWord = words[wordIndex];
        if (!isDeleting) {
          if (prev < currentWord.length) {
            return prev + 1;
          }
          // at full word, count pause ticks
          pauseRef.current += typingMs;
          if (pauseRef.current >= pauseMs) {
            pauseRef.current = 0;
            setIsDeleting(true);
          }
          return prev;
        }

        // deleting
        if (prev > 0) {
          return prev - 1;
        }

        // finished deleting, move to next word
        setIsDeleting(false);
        setWordIndex((w) => (w + 1) % words.length);
        return 0;
      });
    }, typingMs);

    return () => window.clearInterval(iv);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordIndex, isDeleting, words]);

  // blinking cursor
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const iv = setInterval(() => setShowCursor((s) => !s), 500);
    return () => clearInterval(iv);
  }, []);

  const display = words[wordIndex].slice(0, subIndex);

  return (
    <span className={className} aria-live="polite">
      <span className="font-extrabold text-2xl md:text-3xl bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-300 text-transparent bg-clip-text">
        {display}
      </span>
      <span className="ml-1 text-2xl md:text-3xl" aria-hidden>
        {showCursor ? "|" : " "}
      </span>
    </span>
  );
};

export default Typewriter;
