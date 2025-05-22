import React from 'react';
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import clsx from 'clsx';
import ReactHookFormError from '../ReactHookFormError';
import EpicCheckbox from './EpicCheckbox';

interface EpicCheckboxComponentProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  rules?: RegisterOptions<T, Path<T>>;
  className?: string;
  required?: boolean;
}

const EpicCheckboxComponent = <T extends FieldValues>({
  name,
  label,
  control,
  rules,
  className = '',
  required = false,
}: EpicCheckboxComponentProps<T>) => {
  // Merge rules safely
  const combinedRules: RegisterOptions<T, Path<T>> = {
    ...(required ? { required: `${label} is required` } : {}),
    ...rules,
  };

  return (
    <div className={clsx('flex items-center space-x-2 mb-4', className)}>
      <Controller
        name={name}
        control={control}
        rules={combinedRules}
        render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
          <>
            <EpicCheckbox
              ref={ref}
              checked={!!value}
              onChange={onChange}
              error={!!error}
            />
            <label className="text-gray-700">{label}</label>
            <ReactHookFormError message={error?.message} />
          </>
        )}
      />
    </div>
  );
};

export default EpicCheckboxComponent;
