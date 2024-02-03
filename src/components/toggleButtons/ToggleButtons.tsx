import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { IconifyIcon } from "../icon";

interface Props<T> {
  value: T;
  setValue: (value: T) => void;
  options: { name: T; icon: string }[];
}

export const ToggleButtons = <T extends string>({ value, setValue, options }: Props<T>) => {
  return (
    <ToggleButtonGroup value={value} exclusive aria-label="View options">
      {options.map((option) => (
        <ToggleButton key={option.name} value={option.name} aria-label={option.name} onClick={() => setValue(option.name)}>
          <IconifyIcon icon={option.icon} />
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
