import { useEffect } from "react";

export function useInterval(cb: () => void, ms: number) {
  useEffect(() => {
    console.log('setting interval');
    const id = setInterval(cb, ms);
    return () => clearInterval(id);
  }, [cb, ms]);
}
