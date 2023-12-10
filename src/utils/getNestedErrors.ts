import { FieldErrors, FormState, get } from "react-hook-form";

/**
 * @deprecated Use getNestedErrorMessageFormErrors below
 */
export const getNestedErrorMessage = (formState: FormState<any>, fieldName: string): string => {
  const msg: string = get(formState.errors, fieldName)?.message?.toString();
  if (msg?.includes("is a required field")) {
    return "This is a required field";
  }
  return msg ?? "";
};

export const getNestedErrorMessageFormErrors = (errors: FieldErrors<any>, fieldName: string): string => {
  const msg: string = get(errors, fieldName)?.message?.toString();
  if (msg?.includes("is a required field")) {
    return "This is a required field";
  }
  return msg ?? "";
};
