"use client";

import React, { createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContext.Provider
      value={{
        theme: "dark", // <--- Hardcoded to Dark
        toggleTheme: () => { }, // <--- Does nothing
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return {
    theme: "dark",
    toggleTheme: () => { },
  };
}