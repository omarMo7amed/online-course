"use client";

import { useEffect, useRef, RefObject } from "react";

export function useOutsideClick(
  close: () => void
): [RefObject<HTMLDivElement>] {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClose(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    }

    document.addEventListener("click", handleClose, true);

    return () => {
      document.removeEventListener("click", handleClose, true);
    };
  }, [close]);

  return [ref];
}
