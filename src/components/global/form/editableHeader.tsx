import { IconifyIcon } from "@iconify/react/dist/iconify.js";
import { Typography, Grid, Theme } from "@mui/material";
import { ComponentProps, useRef, useState } from "react";
import { Button } from "../button";
import { Icon } from "../Icon";
import { useClickAway } from "react-use";

export interface EditableHeaderProps {
  initialText: string;
  onChange: (txt: string) => void;
  variant?: ComponentProps<typeof Typography>["variant"];
  value?: string;
  disableButtons?: boolean;
}

const customStyles = {
  cursor: "pointer",
};

export const EditableHeader = ({ onChange, initialText, variant, value, disableButtons = false }: EditableHeaderProps) => {
  const ref = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  useClickAway(btnRef, () => {
    setIsEditing(false);
    handleAcceptChange();
  });

  const handleAcceptChange = () => {
    ref.current?.textContent && onChange(ref.current.textContent);
    setIsEditing(false);
  };

  const handleDeclineChange = () => {
    if (ref?.current) {
      ref.current.innerHTML = initialText;
    }
    setIsEditing(false);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Typography
        variant={variant}
        // @ts-ignore
        onKeyDown={(key: KeyboardEvent) => {
          if (key.code === "Enter" || key.code === "NumpadEnter") {
            key.preventDefault();
            (key.target as any).blur();
            handleAcceptChange();
          }
        }}
        onBlur={() => {
          setTimeout(() => handleAcceptChange(), 100);
        }}
        onClick={() => setIsEditing(true)}
        ref={ref}
        style={customStyles}
        suppressContentEditableWarning
        contentEditable
        component={"h3"}
      >
        {value}
      </Typography>
      {isEditing && !disableButtons && (
        <Grid ref={btnRef} sx={{ mt: 1, position: "absolute", right: 0, zIndex: 1000 }}>
          <Button color="warning" variant="contained" size="small" onClick={() => handleAcceptChange()} style={{ marginRight: "0.25rem" }}>
            <Icon icon={"iconamoon:check-bold"} />
          </Button>
          <Button variant="contained" color={"warning"} size="small" onClick={handleDeclineChange}>
            <Icon icon={"charm:cross"} />
          </Button>
        </Grid>
      )}
    </div>
  );
};
