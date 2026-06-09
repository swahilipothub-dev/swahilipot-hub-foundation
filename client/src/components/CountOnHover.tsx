import { useEffect, useRef, useState } from "react";

interface CountOnHoverProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const CountOnHover = ({ target, suffix = "", duration = 800, className = "" }: CountOnHoverProps) => {
  const [value, setValue] = useState<number>(target);
  const frame = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);

  const formatValue = (count: number) => {
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(count);
  };

  const animate = (timestamp: number) => {
    if (!startTime.current) startTime.current = timestamp;
    const elapsed = Math.min(timestamp - startTime.current, duration);
    const progress = elapsed / duration;
    const nextValue = Math.round(target * progress);
    setValue(nextValue);

    if (elapsed < duration) {
      frame.current = requestAnimationFrame(animate);
    } else {
      setValue(target);
      frame.current = null;
    }
  };

  const startCount = () => {
    if (frame.current) {
      cancelAnimationFrame(frame.current);
    }
    // start from 0 and animate to the target
    setValue(0);
    startTime.current = null;
    frame.current = requestAnimationFrame(animate);
  };

  const resetCount = () => {
    if (frame.current) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
    // ensure value shows the final target after hover ends
    setValue(target);
  };

  useEffect(() => {
    return () => {
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return (
    <span
      className={`counter-hover inline-block ${className}`}
      onMouseEnter={startCount}
      onFocus={startCount}
      onMouseLeave={resetCount}
      onBlur={resetCount}
      tabIndex={0}
    >
      {formatValue(value)}{suffix}
    </span>
  );
};

export default CountOnHover;
