import { useEffect, useState } from "react";

interface UseGameTimerOptions {
  duration: number;
  isActive: boolean;
  onTimeUp: () => void;
}

export function useGameTimer({
  duration,
  isActive,
  onTimeUp,
}: UseGameTimerOptions) {
  const [timeLeft, setTimeLeft] = useState(duration);

  // Reset thời gian khi chuyển sang tình huống mới.
  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timerId = window.setTimeout(() => {
      setTimeLeft((previousTime) => Math.max(0, previousTime - 1));
    }, 1000);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [isActive, timeLeft]);

  // Xử lý khi hết thời gian.
  useEffect(() => {
    if (isActive && timeLeft === 0) {
      onTimeUp();
    }
  }, [isActive, timeLeft, onTimeUp]);

  return {
    timeLeft,
    percentage: duration > 0 ? (timeLeft / duration) * 100 : 0,
  };
}
