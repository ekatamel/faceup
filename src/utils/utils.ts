import { useEffect, useRef, RefObject } from "react";

export function useOutsideClick<TRef extends HTMLElement>(
  ref: RefObject<TRef>,
  callback: () => void
) {
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      const node = e.target as Node;
      if (node && !ref?.current?.contains(node)) {
        callback();
      }
    }

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [callback, ref]);
}
