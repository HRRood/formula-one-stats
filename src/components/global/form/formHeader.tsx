import { Grid, Box, Typography, Chip } from "@mui/material";
import { memo } from "react";
import { UseFormReset, useFormContext } from "react-hook-form";
import { FormEditableHeader } from "./formEditableHeader";
import { PageButtons } from "./pageButtons";

export interface FormHeaderProps {
  titleFormKey: string;
  mutate: () => Promise<unknown>;
  onDelete: () => Promise<unknown>;
  readonly?: boolean;
}

export interface FormProps {
  isDirty: boolean;
  reset: UseFormReset<any>;
  name: string;
}

export const FormHeader = (props: FormHeaderProps) => {
  const form = useFormContext();
  const name = form.getValues(props.titleFormKey);
  return <Comp {...props} name={name} reset={form.reset} isDirty={form.formState.isDirty} />;
};

const Comp = memo((props: FormHeaderProps & FormProps) => {
  return (
    <Grid container spacing={2}>
      <Grid sx={{ width: "50%" }} item>
        {!props.readonly && <FormEditableHeader name={props.titleFormKey} variant={"h2"} />}
        {props.readonly && (
          <Box>
            <Typography variant={"h2"}>{props.name}</Typography>
            <Chip label="Readonly" />
          </Box>
        )}
      </Grid>

      <Grid sx={{ width: "50%", marginTop: "10px" }} item display={"flex"} alignItems={"flex-start"} justifyContent={"flex-end"}>
        <PageButtons {...props} />
      </Grid>
    </Grid>
  );
});
