/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";

type ThrottledFunction<T extends (...args: any[]) => void> = (
  ...args: Parameters<T>
) => void;

export default function useThrottle<T extends (...args: any[]) => void>(
  cb: T,
  limit = 100
): ThrottledFunction<T> {
  const limitTime = limit ? limit : 100;
  const lastRun = useRef(Date.now());
  const waitingArgs = useRef<Parameters<T> | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const executeCallback = (args: Parameters<T>) => {
    cb(...args);
    lastRun.current = Date.now();
  };

  const handleTimeout = () => {
    if (waitingArgs.current) {
      executeCallback(waitingArgs.current);
      waitingArgs.current = null;
    }
    timeoutRef.current = null;
  };

  return (...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (Date.now() - lastRun.current < limitTime) {
      waitingArgs.current = args;
      timeoutRef.current = setTimeout(handleTimeout, limitTime);
      return;
    }
    executeCallback(args);
  };
}
