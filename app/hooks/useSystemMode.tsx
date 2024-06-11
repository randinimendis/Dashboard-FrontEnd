"use client";

import { useEffect, useState } from "react";

const useSystemMode = () => {
  const [systemDarkMode, setSystemDarkMode] = useState(false);

  const handleChange = (event: MediaQueryListEvent) => {
    console.log("system theme changed...");
    setSystemDarkMode(event.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setSystemDarkMode(mediaQuery.matches); // Set initial value

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return [systemDarkMode];
};

export default useSystemMode;
