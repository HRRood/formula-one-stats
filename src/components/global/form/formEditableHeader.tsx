import { FormHelperText, Typography } from "@mui/material";
import { EditableHeader } from "./editableHeader";
import { ComponentProps, memo, useEffect } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue, useFormContext } from "react-hook-form";

interface FormEditableHeaderProps {
  name: string;
  onChange?: (txt: string) => void;
  variant: ComponentProps<typeof Typography>["variant"];
}

interface FormProps {
  setValue: UseFormSetValue<any>;
  register: UseFormRegister<any>;
  value: string;
  errors: FieldErrors<any>;
}

export const FormEditableHeader = (props: FormEditableHeaderProps) => {
  const { setValue, register, watch, formState } = useFormContext();
  const value = watch(props.name);
  return <Comp {...props} setValue={setValue} value={value} register={register} errors={formState.errors} />;
};

const Comp = memo(({ name, onChange, variant, setValue, register, value, errors }: FormEditableHeaderProps & FormProps) => {
  useEffect(() => {
    register(name);
  }, []);

  return (
    <>
      <EditableHeader
        value={value}
        onChange={(txt) => {
          onChange?.(txt);
          setValue(name, txt, { shouldDirty: true });
        }}
        variant={variant}
        initialText={value || ""}
      />
      {/* <FormHelperText sx={{ color: (theme) => theme.palette.error.main }}>{getNestedErrorMessageFormErrors(errors, name)}</FormHelperText> */}
    </>
  );
});
