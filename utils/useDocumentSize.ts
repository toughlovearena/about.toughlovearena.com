import { useCallback, useEffect, useState } from "react";

interface Size {
  height: number;
  width: number;
}

export function useDocumentSize(): Size {
  // cannot reference document.body on first render due to server-side rendering
  const [size, setSize] = useState<Size>({ width: 100, height: 100, });

  const updateWidth = useCallback(() => {
    setSize(document.body.getBoundingClientRect());
  }, [setSize]);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [updateWidth]);

  // init
  useEffect(() => {
    updateWidth();
  }, []);

  return size;
}