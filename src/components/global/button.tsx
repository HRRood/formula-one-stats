"use client";
import { Button as MuiButton, Theme } from "@mui/material";

type ButtonBaseColors = "primary" | "secondary" | "error" | "warning" | "info" | "success";

type ButtonColors =
  | ButtonBaseColors
  | "primary.light"
  | "primary.dark"
  | "secondary.light"
  | "secondary.dark"
  | "success.light"
  | "success.dark"
  | "error.light"
  | "error.dark"
  | "warning.light"
  | "warning.dark"
  | "info.light"
  | "info.dark";

interface ButtonProps extends Omit<React.ComponentProps<typeof MuiButton>, "color"> {
  color: ButtonColors;
}

export const Button = ({ color = "primary.dark", variant, ...props }: ButtonProps) => {
  const baseColor = color.split(".")[0] as ButtonBaseColors;

  const getColor = (theme: Theme) => {
    const colorTypes = color.split(".");
    const baseColor = colorTypes[0] as ButtonBaseColors;
    const type = (colorTypes[1] || "main") as "light" | "dark" | "main";
    return theme.palette[baseColor][type];
  };

  if (variant === "text") {
    return <MuiButton {...props} variant="text" color={baseColor} sx={{ color: getColor }} />;
  }

  if (variant === "outlined") {
    return <MuiButton {...props} variant="outlined" color={baseColor} sx={{ borderColor: getColor, color: getColor }} />;
  }

  return (
    <MuiButton
      {...props}
      variant="contained"
      color={baseColor}
      sx={{
        background: getColor,
      }}
    />
  );
};
