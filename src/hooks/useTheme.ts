import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";

export const THEME_COLORS = {
  light: {
    background: "#f7f6ff",
    backgroundPaper: "#fff",
    lightPrimary: "#FFA5B3",
    primary: "#FF8A99",
    darkPrimary: "#FF7380",
    lightSecondary: "#C0E9FF",
    secondary: "#AEDFF7",
    darkSecondary: "#84C0F4",
    text: "#333333",
    success: "#8CEBA7",
  },
  dark: {
    background: "#040101;",
    backgroundPaper: "#130808",
    primary: "#e62c85",
    secondary: "#deb137",
    text: "#EDEDED",
    success: "#68A77E",
  },
};

export const useTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [colorScheme, setColorScheme] = useState<"dark" | "light">(!prefersDarkMode ? "light" : "dark");

  useEffect(() => {
    setColorScheme(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const themeColors = THEME_COLORS[colorScheme];

  return { mode: colorScheme, colors: themeColors };
};
