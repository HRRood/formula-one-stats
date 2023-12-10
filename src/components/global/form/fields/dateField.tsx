import { Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ComponentProps, memo } from "react";
import { FieldErrors, UseFormGetValues, UseFormRegister, UseFormSetValue, UseFormWatch, useFormContext } from "react-hook-form";

type FormInputFieldProps = {
  name: string;
  errorMsgPositionAbsolute?: boolean;
} & ComponentProps<typeof DatePicker>;

interface FormProps {
  errors: FieldErrors<any>;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
}

export const DateField = (props: FormInputFieldProps) => {
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
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          {...register(name)}
          {...props}
          onChange={(date) => setValue(name, date, { shouldDirty: true })}
          value={getValues(name)}
          sx={{ width: "100%" }}
        />
      </LocalizationProvider>
    </Box>
  );
});
