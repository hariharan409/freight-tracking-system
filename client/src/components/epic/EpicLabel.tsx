import clsx from 'clsx';
import React from 'react';

interface EpicLabelProps {
  htmlFor: string;
  label: string;
  required?: boolean;
  className?: string;
}

const EpicLabel: React.FC<EpicLabelProps> = ({
  htmlFor,
  label,
  required = false,
  className = '',
}) => {
  return (
    <label htmlFor={htmlFor} className={clsx('block mb-2 font-medium text-gray-700', className)}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  );
};

export default EpicLabel;
