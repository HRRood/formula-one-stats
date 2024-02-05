"use client";

import { Driver } from "@/backend/types/dbTypes";
import { GpWeekend } from "@prisma/client";
import { atom, useAtom, useSetAtom } from "jotai";
import { useCallback } from "react";

export type ObjectValues<T> = T[keyof T];

export const DialogType = {
  YesNo: "yesNoDialog",
  AddSeasonDriver: "addSeasonDriverDialog",
  AddSeasonGpWeekend: "addSeasonGpWeekendDialog",
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
  [DialogType.AddSeasonDriver]: {
    seasonId: string;
    onCreate: (data: Driver) => Promise<void> | void;
  };
  [DialogType.AddSeasonGpWeekend]: {
    seasonId: string;
    onCreate: (data: GpWeekend) => Promise<void> | void;
  };
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
  const setDialogState = useSetAtom(dialogAtom);

  const openDialog: openDialogFunc = useCallback(
    <T extends DialogType>(dialogType: T, dialogProps?: DialogState<T>["dialogProps"]) => {
      setDialogState({ dialogType, dialogProps, open: true });
    },
    [setDialogState]
  );

  const closeDialog = useCallback(() => {
    setDialogState({ open: false, dialogType: DialogType.None, dialogProps: {} });
  }, [setDialogState]);

  return { openDialog, closeDialog };
};

export const useDialogState = () => {
  const [state] = useAtom(dialogAtom);

  return { state };
};
