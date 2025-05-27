import { Controller, Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import EpicLabel from '@/components/epic/EpicLabel';
import ReactHookFormError from '@/components/epic/ReactHookFormError';
import clsx from 'clsx';

interface Option {
  label: string;
  value: string | number | boolean;
}

interface EpicCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  control: Control<T>;
  options: Option[];
  rules?: Omit<RegisterOptions<T, Path<T>>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
  required?: boolean;
  textFieldClassName?: string;
  checkboxClassName?: string;
  showLabel?: boolean;
  showInfo?: boolean;
  tooltipText?: string;
  readOnly?: boolean;
}

const EpicCheckbox = <T extends FieldValues>({
  name,
  label,
  control,
  options,
  rules = {},
  required = false,
  textFieldClassName = '',
  checkboxClassName = '',
  showLabel = true,
  showInfo = false,
  tooltipText = '',
  readOnly = false,
}: EpicCheckboxProps<T>) => {
  return (
    <div className={clsx('mb-0', textFieldClassName)}>
      {showLabel && (<EpicLabel htmlFor={name} label={label || ''} required={required} showInfo={showInfo} tooltipText={tooltipText}/>)}

      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${label} is required` : false,
          ...rules,
        }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <>
            <div className={clsx('flex gap-2', checkboxClassName)}>
              {options.map((option) => (
                <label
                  key={String(option.value)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Checkbox
                    id={`${name}-${option.value}`}
                    checked={value === option.value}
                    onCheckedChange={() =>
                      !readOnly && onChange(option.value)
                    }
                    disabled={readOnly}
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
            <ReactHookFormError message={error?.message} />
          </>
        )}
      />
    </div>
  );
};

export default EpicCheckbox;
