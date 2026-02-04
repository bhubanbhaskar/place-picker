import { useEffect, useState } from "react";

export default function ProgressBar({ duration, interval = 10, onComplete }) {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          onComplete?.();
          return 0;
        }
        return prev - interval;
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [duration, interval, onComplete]);

  return <progress value={remainingTime} max={duration} />;
}
