import { Grid, Box, Typography, Chip } from "@mui/material";
import { memo } from "react";
import { UseFormReset, useFormContext } from "react-hook-form";
import { FormEditableHeader } from "./formEditableHeader";
import { PageButtons } from "./pageButtons";
import { Button } from "../../button";

export interface FormHeaderProps {
  titleFormKey: string;
  mutate: () => Promise<unknown>;
  onDelete: () => Promise<unknown>;
  readonly?: boolean;
  overviewUrl?: string;
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
    <Box sx={{ marginBottom: "10px" }}>
      <Button color="primary" href={props.overviewUrl} variant="text">
        Back to Overview
      </Button>
      <Grid container spacing={2}>
        <Grid sx={{ width: "70%" }} item>
          {!props.readonly && <FormEditableHeader name={props.titleFormKey} variant={"h2"} />}
          {props.readonly && (
            <Box>
              <Typography variant={"h2"}>{props.name}</Typography>
              <Chip label="Readonly" />
            </Box>
          )}
        </Grid>

        <Grid sx={{ width: "30%", marginTop: "10px" }} item display={"flex"} alignItems={"flex-start"} justifyContent={"flex-end"}>
          <PageButtons {...props} />
        </Grid>
      </Grid>
    </Box>
  );
});
