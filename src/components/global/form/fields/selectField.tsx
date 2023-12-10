import { getNestedErrorMessageFormErrors } from "@/utils/getNestedErrors";
import { SelectProps, FormControl, InputLabel, Select, OutlinedInput, MenuItem, FormHelperText } from "@mui/material";
import { FC, memo, useEffect } from "react";
import { UseFormSetValue, FieldErrors, UseFormWatch, UseFormRegister, useFormContext } from "react-hook-form";

interface FormDropdownFieldProps extends SelectProps {
  name: string;
  options: { value: any; label: string }[];
}

interface FormProps {
  setValue: UseFormSetValue<any>;
  errors: FieldErrors<any>;
  watch: UseFormWatch<any>;
  register: UseFormRegister<any>;
}

export const SelectField = (props: Omit<FormDropdownFieldProps, "errors">) => {
  const {
    formState: { errors },
    setValue,
    watch,
    register,
  } = useFormContext();

  return <Comp {...props} errors={errors} setValue={setValue} watch={watch} register={register} />;
};

const Comp: FC<FormDropdownFieldProps & FormProps> = memo(({ name, label, options = [], errors, watch, setValue, register, ...props }) => {
  const errorMsg = getNestedErrorMessageFormErrors(errors, name);

  useEffect(() => {
    register(name);
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        onChange={(event) => setValue(name, event.target.value, { shouldDirty: true })}
        value={watch(name)}
        error={!!errorMsg}
        input={<OutlinedInput label={label} />}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText sx={{ color: (theme) => theme.palette.error.main }}>{errorMsg}</FormHelperText>
    </FormControl>
  );
});
