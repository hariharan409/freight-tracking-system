import React, { ForwardedRef } from 'react';
import clsx from 'clsx';

interface EpicInputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  className?: string;
  readOnly: boolean
}

const EpicInput = React.forwardRef<HTMLInputElement, EpicInputProps>(({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onBlur,
  error = false,
  className = '',
  readOnly
}, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
      readOnly={readOnly}
      className={clsx(
        'w-full px-2 py-2 border rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-700 h-7 placeholder:capitalize placeholder:text-sm',
        error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300',
        readOnly && 'readonly',
        className
      )}
    />
  );
});

EpicInput.displayName = 'EpicInput';

export default EpicInput;
