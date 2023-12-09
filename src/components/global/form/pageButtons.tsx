import { useRouter } from "next/navigation";
import { Icon } from "../Icon";
import { Button } from "../button";
import { useState } from "react";
import { FormHeaderProps, FormProps } from "./formHeader";
import { Box } from "@mui/material";
import { useFormContext } from "react-hook-form";

export const PageButtons = ({ name, onDelete, mutate, reset, isDirty, readonly }: FormHeaderProps & FormProps) => {
  // const { openDialog } = useDialog();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box sx={{ display: "flex", gap: "5px" }}>
      {/* <Loader isLoading={isLoading} /> */}
      <Button
        onClick={() =>
          // openDialog(DialogType.YesNo, {
          //   title: 'Delete?',
          //   explainer: (
          //     <>
          //       <strong>{name}</strong> will be deleted.
          //     </>
          //   ),
          //   buttonType: 'error',
          //   onAccept: async () => {
          //     setIsLoading(true);
          //     await onDelete();
          //     await mutate();
          //     setIsLoading(false);
          //     router.push(overViewUrl);
          //     toast.success(⁠ '${name}' has been deleted ⁠);
          //   },
          // })
          console.log("delete")
        }
        sx={{ marginLeft: 4 }}
        variant={"outlined"}
        color={"error"}
      >
        <Icon icon={"tabler:trash"} />
      </Button>
      <Button
        onClick={() =>
          // openDialog(DialogType.YesNo, {
          //   title: "Reset changes",
          //   explainer: "The page will be reset to its current state on our servers",
          //   buttonType: "warning",
          //   onAccept: async () => {
          //     reset();
          //   },
          // })
          reset()
        }
        variant={"outlined"}
        color={"warning"}
        disabled={!isDirty || readonly}
      >
        <Icon icon={"pepicons-pop:arrow-spin"} />
      </Button>
      <Button variant={"contained"} color="primary" disabled={!isDirty || readonly} type={"submit"}>
        <Icon icon={"material-symbols:save"} />
      </Button>
    </Box>
  );
};
