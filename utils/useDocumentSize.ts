import { useCallback, useEffect, useState } from "react";

export function useDocumentSize() {
  const [size, setSize] = useState(document.body.getBoundingClientRect());

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