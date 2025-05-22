import { Controller, Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import EpicLabel from '@/components/epic/EpicLabel';
import ReactHookFormError from '@/components/epic/ReactHookFormError';
import clsx from 'clsx';
import EpicSelect from '@/components/epic/epic-dropdown/EpicSelect';



/*
  Example code:

      const countryOptions = [
              { code: 'INR', name: 'INDIA' },
              { code: 'SGD', name: 'SINGAPORE' },
              { code: 'USD', name: 'AMERICA' },
            ];

      <EpicDropdown 
        name="country"
        label="Country"
        control={control}
        required={true}
        placeholder="--- Select Country ---"
        optionValue='name'
        optionKey='code'
        options={countryOptions} 
       />

*/


interface Option {
  [key: string]: any;
}

interface EpicDropdownProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  rules?: RegisterOptions<T, Path<T>>;
  required?: boolean;
  options?: Option[];
  className?: string;
  placeholder?: string;
  optionValue?: string;
  optionKey?: string;
  showLabel?: boolean
}

const EpicDropdown = <T extends FieldValues>({
  name,
  label,
  control,
  rules = {},
  required = false,
  options = [],
  className = '',
  placeholder = '',
  optionValue = 'value',
  optionKey = 'key',
  showLabel = true
}: EpicDropdownProps<T>) => {
  return (
    <div className={clsx('mb-0 w-full', className)}>
      {showLabel && <EpicLabel htmlFor={name} label={label} required={required} />}
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${label} is required` : false,
          ...rules,
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <>
            <EpicSelect
              id={name}
              value={value ?? ''}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              placeholder={placeholder}
              options={options}
              error={!!error}
              optionValue={optionValue}
              optionKey={optionKey}
            />
            <ReactHookFormError message={error?.message} />
          </>
        )}
      />
    </div>
  );
};

export default EpicDropdown;
