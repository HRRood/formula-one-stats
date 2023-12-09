import { PropsWithChildren } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

interface FormProps<TFieldValues extends FieldValues> extends PropsWithChildren<ReturnType<typeof useForm<TFieldValues>>> {
  onSubmit: (data: TFieldValues, event?: React.BaseSyntheticEvent) => unknown | Promise<unknown>;
  onLeave?: () => void;
  // disableFormLeavePrompt?: boolean;
}

export const Form = <TFieldValues extends FieldValues>({
  children,
  onSubmit,
  onLeave = () => undefined,
  // disableFormLeavePrompt = false,
  ...props
}: FormProps<TFieldValues>) => {
  return (
    <FormProvider {...props}>
      <form onSubmit={props.handleSubmit(onSubmit)}>
        {/* {!disableFormLeavePrompt && <OnLeavePrompt onLeave={onLeave} />} */}
        {children}
      </form>
    </FormProvider>
  );
};
