import {Controller,Control,FieldValues,Path,RegisterOptions} from "react-hook-form";
import { MultiSelect } from "@/components/ui/multi-select";
import EpicLabel from "@/components/epic/EpicLabel";
import ReactHookFormError from "@/components/epic/ReactHookFormError";
import clsx from "clsx";

interface Option {
  value: string;
  label: string;
}

interface EpicMultiSelectProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  options: Option[];
  rules?: Omit<
    RegisterOptions<T, Path<T>>,
    "setValueAs" | "disabled" | "valueAsNumber" | "valueAsDate"
  >;
  required?: boolean;
  maxCount?: number;
  placeholder?: string;
  variant?: "default" | "inverted";
  animation?: number;
  className?: string;
  showLabel?: boolean
}

const EpicMultiSelect = <T extends FieldValues>({
  name,
  label,
  control,
  options,
  rules = {},
  required = false,
  maxCount,
  placeholder = "Select options",
  variant = "default",
  animation = 1,
  className = "",
  showLabel = true,
}: EpicMultiSelectProps<T>) => {
  return (
    <div className={clsx("mb-0", className)}>
      {showLabel && <EpicLabel htmlFor={name} label={label} required={required} />}
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${label} is required` : false,
          ...rules
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <MultiSelect
              options={options}
              onValueChange={onChange}
              defaultValue={value}
              maxCount={maxCount}
              placeholder={placeholder}
              variant={variant}
              animation={animation}
            />
            <ReactHookFormError message={error?.message} />
          </>
        )}
      />
    </div>
  );
};

export default EpicMultiSelect;
