import React from 'react';
import { Controller } from 'react-hook-form';
import EpicLabel from '@/components/epic/EpicLabel';
import ReactHookFormError from '@/components/epic/ReactHookFormError';
import clsx from 'clsx';
import EpicTextareaInput from '@/components/epic/epic-textarea/EpicTextareaInput';

interface EpicTextareaProps {
  name: string;
  label: string;
  control: any;
  rules?: object;
  required?: boolean;
  placeholder?: string;
  className?: string;
  rows?: number;
}

const EpicTextarea: React.FC<EpicTextareaProps> = ({
  name,
  label,
  control,
  rules = {},
  required = false,
  placeholder = '',
  className = '',
  rows = 3,
}) => {
  return (
    <div className={clsx('mb-4 w-full', className)}>
      <EpicLabel htmlFor={name} label={label} required={required} />
      <Controller
        name={name}
        control={control}
        rules={{ required: required ? `${label} is required` : false, ...rules }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <>
            <EpicTextareaInput
              id={name}
              placeholder={placeholder}
              rows={rows}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
            />
            <ReactHookFormError message={error?.message} />
          </>
        )}
      />
    </div>
  );
};

export default EpicTextarea;
