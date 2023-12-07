import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";

export const THEME_COLORS = {
  light: {
    background: "#F8F8F8",
    backgroundPaper: "#ECECEC",
    primary: "#FF77B9",
    secondary: "#FFD966",
    text: "#333333",
    success: "#A0D2B4",
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
