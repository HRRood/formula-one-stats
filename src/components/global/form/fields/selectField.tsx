import {getNestedErrorMessageFormErrors} from "@/utils/getNestedErrors";
import {
  SelectProps,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  FormHelperText,
  ListSubheader, TextField, InputAdornment
} from "@mui/material";
import {FC, memo, useEffect, useMemo, useState} from "react";
import {UseFormSetValue, FieldErrors, UseFormWatch, UseFormRegister, useFormContext} from "react-hook-form";
import {Icon} from "@/components/global/Icon";

interface FormDropdownFieldProps extends SelectProps {
  name: string;
  options: { value: any; label: string }[];
  includeSearchHeader?: boolean;
}

interface FormProps {
  setValue: UseFormSetValue<any>;
  errors: FieldErrors<any>;
  watch: UseFormWatch<any>;
  register: UseFormRegister<any>;
}

export const SelectField = (props: Omit<FormDropdownFieldProps, "errors">) => {
  const {
    formState: {errors},
    setValue,
    watch,
    register,
  } = useFormContext();

  return <Comp {...props} errors={errors} setValue={setValue} watch={watch} register={register}/>;
};

const Comp: FC<FormDropdownFieldProps & FormProps> = memo(({
                                                             includeSearchHeader,
                                                             name,
                                                             label,
                                                             options = [],
                                                             errors,
                                                             watch,
                                                             setValue,
                                                             register,
                                                             ...props
                                                           }) => {
  const errorMsg = getNestedErrorMessageFormErrors(errors, name);

  const [searchText, setSearchText] = useState("");
  const filteredOptions = useMemo(
      () => options.filter((option) => option.label.toLowerCase().includes(searchText.toLowerCase())),
      [searchText]
  );

  useEffect(() => {
    register(name);
  }, []);

  return (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
            onChange={(event) => setValue(name, event.target.value, {shouldDirty: true})}
            value={watch(name)}
            error={!!errorMsg}
            input={<OutlinedInput label={label}/>}
            MenuProps={{autoFocus: false}}
            {...props}
        >
          {includeSearchHeader && (
              <ListSubheader>
                <TextField
                    size="small"
                    sx={{margin: "5px"}}
                    // Autofocus on textfield
                    autoFocus
                    placeholder="Type to search..."
                    fullWidth
                    InputProps={{
                      startAdornment: (
                          <InputAdornment position="start">
                            <Icon icon={"tabler:search"}/>
                          </InputAdornment>
                      )
                    }}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key !== "Escape") {
                        // Prevents autoselecting item while typing (default Select behaviour)
                        e.stopPropagation()

                      }
                    }}
                />
              </ListSubheader>
          )}
          {filteredOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
          ))}
        </Select>
        <FormHelperText sx={{color: (theme) => theme.palette.error.main}}>{errorMsg}</FormHelperText>
      </FormControl>
  );
});
