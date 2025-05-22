import { Controller, Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import ReactHookFormError from '@/components/epic/ReactHookFormError';
import EpicLabel from '@/components/epic/EpicLabel';
import EpicInput from '@/components/epic/epic-textfield/EpicInput';
import clsx from 'clsx';

interface EpicTextFieldProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  type?: string;
  placeholder?: string;
  control: Control<T>;
  rules?: Omit<RegisterOptions<T, Path<T>>, 'setValueAs' | 'disabled' | 'valueAsNumber' | 'valueAsDate'>;
  required?: boolean;
  textFieldClassName?: string;
  epicInputClassName?: string;
  readOnly?: boolean;
  showLabel?: boolean
}

const EpicTextField = <T extends FieldValues>({
  name,
  label,
  type = 'text',
  placeholder = '',
  control,
  rules = {},
  required = false,
  textFieldClassName = '',
  epicInputClassName = '',
  readOnly = false,
  showLabel = true,
}: EpicTextFieldProps<T>) => {
  return (
    <div className={clsx('mb-0', textFieldClassName)}>
      {showLabel && <EpicLabel htmlFor={name} label={label || ""} required={required} />}
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${label} is required` : false,
          ...rules,
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <>
            <EpicInput
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              error={!!error}
              className={epicInputClassName}
              readOnly={readOnly}
            />
            <ReactHookFormError message={error?.message} />
          </>
        )}
      />
    </div>
  );
};

export default EpicTextField;
