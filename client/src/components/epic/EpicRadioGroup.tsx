import React from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';

interface EpicRadioGroupProps {
  name: string;
  control: Control<FieldValues>;
  label?: string;
  options: { label: string; value: string | number }[];
  required?: boolean;
  rules?: object;
  className?: string;
}

const EpicRadioGroup: React.FC<EpicRadioGroupProps> = ({
  name,
  control,
  label,
  options = [],
  required = false,
  rules = {},
  className = '',
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block mb-2 font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={{ required: required ? 'This field is required' : false, ...rules }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <div className="ml-2 flex flex-col gap-2 w-auto">
              {options.map((option) => (
                <label key={option.value} className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    value={option.value}
                    checked={value === option.value}
                    onChange={() => onChange(option.value)}
                    className="text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default EpicRadioGroup;
