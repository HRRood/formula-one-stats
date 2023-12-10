"use client";

import { atom, useAtom } from "jotai";
import { useCallback } from "react";

export type ObjectValues<T> = T[keyof T];

export const DialogType = {
  YesNo: "yesNoDialog",
  AddSeasonDriver: "addSeasonDriverDialog",
  None: "none",
} as const;

export type DialogType = ObjectValues<typeof DialogType>;

export type DialogPropsMap = {
  [DialogType.YesNo]: {
    title: string;
    explainer?: string | JSX.Element;
    onAccept: () => Promise<void> | void;
    acceptLabel?: string;
    noLabel?: string;
    buttonType?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  };
  [DialogType.AddSeasonDriver]: {};
  [DialogType.None]: {};
};

export interface DialogState<T extends DialogType = DialogType> {
  open: boolean;
  dialogType: T;
  dialogProps?: DialogPropsMap[T];
}

export const dialogAtom = atom<DialogState>({
  open: false,
  dialogType: DialogType.None,
  dialogProps: {},
});

export type openDialogFunc = <T extends DialogType>(dialogType: T, dialogProps?: DialogState<T>["dialogProps"]) => void;

export const useDialog = () => {
  const [, setDialogState] = useAtom(dialogAtom);

  const openDialog: openDialogFunc = useCallback(<T extends DialogType>(dialogType: T, dialogProps?: DialogState<T>["dialogProps"]) => {
    setDialogState({ dialogType, dialogProps, open: true });
  }, []);

  const closeDialog = useCallback(() => {
    setDialogState({ open: false, dialogType: DialogType.None, dialogProps: {} });
  }, []);

  return { openDialog, closeDialog };
};

export const useDialogState = () => {
  const [state] = useAtom(dialogAtom);

  return { state };
};
