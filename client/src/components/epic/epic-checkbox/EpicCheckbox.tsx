import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface EpicCheckboxProps {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  error?: boolean;
}

const EpicCheckbox = forwardRef<HTMLInputElement, EpicCheckboxProps>(
  ({ checked, onChange, error }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        checked={!!checked}
        onChange={(e) => onChange(e.target.checked)}
        className={clsx(
          'h-4 w-4 text-blue-600 border-gray-300 rounded',
          error && 'border-red-500'
        )}
      />
    );
  }
);

EpicCheckbox.displayName = 'EpicCheckbox';

export default EpicCheckbox;
