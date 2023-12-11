"use client";

import { DialogType, useDialog, useDialogState } from "@/hooks/layout/useDialog";
import { Dialog } from "@mui/material";
import { FC } from "react";
import { YesNoDialog } from "../dialog/yesNoDialog";

export const dialogComponents: Record<DialogType, { comp: FC<any>; size: "lg" | "sm" | "xs" }> = {
  [DialogType.YesNo]: {
    comp: YesNoDialog,
    size: "lg",
  },
  [DialogType.AddSeasonDriver]: {
    comp: () => (
      <>
        <h1>TEST</h1>
      </>
    ),
    size: "lg",
  },
  [DialogType.None]: {
    comp: () => <></>,
    size: "lg",
  },
} as const;

const DialogBox = () => {
  const { closeDialog } = useDialog();
  const { state } = useDialogState();
  const { open, dialogType, dialogProps } = state;

  if (!open || dialogType === null) {
    return null;
  }

  const DialogComponent: FC<any> = dialogComponents[dialogType].comp;
  const maxWidth = dialogComponents[dialogType].size;

  return (
    <Dialog
      open={open}
      onKeyDown={(key) => key.code === "Escape" && closeDialog()}
      maxWidth={maxWidth}
      onClose={(event, reason) => {
        if (reason === "backdropClick") {
          closeDialog();
        }
      }}
    >
      <>{DialogComponent ? <DialogComponent {...dialogProps} /> : null}</>
    </Dialog>
  );
};

export default DialogBox;
