"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  type ReactNode,
} from "react";

type HeaderNavContextValue = {
  registerCloser: (close: () => void) => () => void;
  closeAllMenus: () => void;
};

const HeaderNavContext = createContext<HeaderNavContextValue | null>(null);

export function HeaderNavProvider({ children }: { children: ReactNode }) {
  const closersRef = useRef(new Set<() => void>());

  const registerCloser = useCallback((close: () => void) => {
    closersRef.current.add(close);
    return () => {
      closersRef.current.delete(close);
    };
  }, []);

  const closeAllMenus = useCallback(() => {
    closersRef.current.forEach((close) => close());
  }, []);

  const value = useMemo(
    () => ({ registerCloser, closeAllMenus }),
    [registerCloser, closeAllMenus],
  );

  return (
    <HeaderNavContext.Provider value={value}>{children}</HeaderNavContext.Provider>
  );
}

export function useHeaderNav() {
  const context = useContext(HeaderNavContext);

  if (!context) {
    throw new Error("useHeaderNav must be used within HeaderNavProvider");
  }

  return context;
}
