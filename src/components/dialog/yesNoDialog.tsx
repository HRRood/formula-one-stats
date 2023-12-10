"use client";

import { DialogPropsMap, useDialog } from "@/hooks/layout/useDialog";
import { Box, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { useState } from "react";
import { Button } from "../global/button";

export const YesNoDialog = ({ onAccept, explainer, title, buttonType, acceptLabel, noLabel }: DialogPropsMap["yesNoDialog"]) => {
  const { closeDialog } = useDialog();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box sx={{ maxWidth: "500px" }}>
      <DialogTitle>
        <Typography variant={"h2"}>{title}</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{explainer}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant={"outlined"} fullWidth onClick={closeDialog} color={"secondary"}>
          {noLabel || "No"}
        </Button>
        <Button
          variant={"contained"}
          fullWidth
          color={buttonType || "warning"}
          onClick={async () => {
            setIsLoading(true);
            await onAccept();
            setIsLoading(false);
            closeDialog();
          }}
        >
          {acceptLabel || "Yes"}
        </Button>
      </DialogActions>
    </Box>
  );
};
