import React, { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "tt-theme";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(undefined);

  // Initialize theme on mount (client-side)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (stored === "dark" || (!stored && prefersDark)) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {
      // ignore
      setTheme("light");
    }
  }, []);

  // Persist changes
  useEffect(() => {
    if (!theme) return;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
      if (theme === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function useTheme() {
  const ctx = useContext(ThemeContext);

  // Always create a fallback local state so hooks order is consistent.
  const [fallbackTheme, setFallbackTheme] = useState("light");
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setFallbackTheme(stored);
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleFallback = () => {
    const nt = fallbackTheme === "dark" ? "light" : "dark";
    setFallbackTheme(nt);
    try {
      localStorage.setItem(STORAGE_KEY, nt);
      if (nt === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } catch (e) {}
  };

  if (ctx) return ctx;
  return {
    theme: fallbackTheme,
    setTheme: setFallbackTheme,
    toggle: toggleFallback,
  };
}
