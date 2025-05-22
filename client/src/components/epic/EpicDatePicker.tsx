import { DateTime } from "luxon";
import { CalendarIcon } from "lucide-react";
import { Controller, Control, FieldValues, Path, RegisterOptions } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import EpicLabel from "@/components/epic/EpicLabel";
import ReactHookFormError from "@/components/epic/ReactHookFormError";
import clsx from "clsx";

interface EpicDatePickerProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  rules?: RegisterOptions<T, Path<T>>;
  required?: boolean;
  className?: string;
  placeholder?: string;
}

const EpicDatePicker = <T extends FieldValues>({
  name,
  label,
  control,
  rules = {},
  required = false,
  className = '',
  placeholder = 'Pick a date',
}: EpicDatePickerProps<T>) => {
  return (
    <div className={clsx("w-full", className)}>
      <EpicLabel htmlFor={name} label={label} required={required} />
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${label} is required` : false,
          ...rules,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full h-7 p-2 rounded-sm justify-between text-left font-normal", !value && "text-muted-foreground", error && "border-red-500")}>
                  {value ? DateTime.fromJSDate(value).toFormat("dd LLL yy") : <span className="text-gray-400">{placeholder}</span>}
                  <CalendarIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto bg-white p-0">
                <Calendar mode="single" selected={value} onSelect={onChange} initialFocus />
              </PopoverContent>
            </Popover>
            <ReactHookFormError message={error?.message} />
          </>
        )}
      />
    </div>
  );
};

export default EpicDatePicker;