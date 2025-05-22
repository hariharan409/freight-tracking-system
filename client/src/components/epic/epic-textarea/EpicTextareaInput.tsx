import React, { ForwardedRef } from 'react';
import clsx from 'clsx';

interface EpicTextareaInputProps {
  id: string;
  placeholder?: string;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  className?: string;
}

const EpicTextareaInput = React.forwardRef<HTMLTextAreaElement, EpicTextareaInputProps>(
  ({ id, placeholder, rows = 4, value, onChange, onBlur, error = false, className = '' }, ref) => {
    return (
      <textarea
        id={id}
        ref={ref}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(
          'w-full px-2 py-2 border rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-600 resize-y',
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300',
          className
        )}
      />
    );
  }
);

EpicTextareaInput.displayName = 'EpicTextareaInput'; // Required for forwardRef with React DevTools

export default EpicTextareaInput;
