import { getNestedErrorMessageFormErrors } from "@/utils/getNestedErrors";
import { FormControl, TextField, Typography } from "@mui/material";
import { ComponentProps, memo, useEffect } from "react";
import { FieldErrors, UseFormSetValue, UseFormGetValues, UseFormRegister, UseFormWatch, useFormContext } from "react-hook-form";

type FormInputFieldProps = {
  name: string;
  errorMsgPositionAbsolute?: boolean;
} & ComponentProps<typeof TextField>;

interface FormProps {
  errors: FieldErrors<any>;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
}

export const InputField = (props: FormInputFieldProps) => {
  const {
    register,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext();
  return <Comp {...props} errors={errors} setValue={setValue} getValues={getValues} register={register} watch={watch} />;
};

const Comp = memo(({ name, errorMsgPositionAbsolute = false, errors, setValue, getValues, register, watch, ...props }: FormInputFieldProps & FormProps) => {
  const errorMsg = getNestedErrorMessageFormErrors(errors, name);

  useEffect(() => {}, []);
  return (
    <FormControl fullWidth>
      <TextField
        {...register(name)}
        variant="outlined"
        fullWidth
        // onChange={(event) => setValue(name, event.target.value, { shouldDirty: true })}
        {...props}
        helperText={
          <Typography
            variant={"caption"}
            color={"error"}
            sx={
              errorMsgPositionAbsolute
                ? {
                    position: "absolute",
                    bottom: "-18px",
                  }
                : undefined
            }
          >
            {errorMsg}
          </Typography>
        }
        error={!!errorMsg}
      />
    </FormControl>
  );
});
