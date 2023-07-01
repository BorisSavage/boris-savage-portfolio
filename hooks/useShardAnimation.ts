import { useEffect, useRef, useState } from "react";

export default function useShardAnimation() {
  const shardRef = useRef<HTMLDivElement>(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isCenter, setIsCenter] = useState(false);

  const handleTransitionEnd = () => {
    const shard = shardRef.current;
    const shardParent = shard?.offsetParent as HTMLElement;
    if (shard && shardParent) {
      const offsetLeftPercent = Math.round(
        (shard.offsetLeft / shardParent.offsetWidth) * 100
      );
      if (offsetLeftPercent === 50) {
        setIsCenter(true);
        setIsEnd(false);
        return;
      }
      if (offsetLeftPercent === 70) {
        setIsCenter(false);
        setIsEnd(true);
        return;
      }
      setIsCenter(false);
      setIsEnd(false);
    }
  };

  useEffect(() => {
    const shard = shardRef.current;
    shard?.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      shard?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  return {
    shardRef,
    isCenter,
    isEnd,
  };
}
