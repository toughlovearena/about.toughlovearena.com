import { useCallback, useEffect, useRef, useState } from "react";
import { useInterval } from "./useInterval";

interface Size {
  height: number;
  width: number;
}

export function useElementSize(): {
  setRef(node: HTMLElement): void;
  size: Size;
 } {
  const [elm, setRef] = useState<HTMLElement | undefined>();
  const [size, setSize] = useState<Size>({ width: 100, height: 100});

  const updateSize = useCallback(() => {
    if (elm) {
      const bound = elm.getBoundingClientRect();
      const newSize = { width: bound.width, height: bound.height, };
      const toStr = (s: Size) => [s.width, s.height].join(',');
      if (toStr(size) !== toStr(newSize)) {
        setSize(newSize);
      }
    }
  }, [elm, size, setSize]);
  useEffect(() => {
    updateSize();
  }, [elm]);
  useInterval(updateSize, 1000);

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [updateSize]);

  return {
    setRef,
    size,
  };
}
