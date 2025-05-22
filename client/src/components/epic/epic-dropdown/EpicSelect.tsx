
import { forwardRef } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'; // Adjust import path based on your setup

interface EpicSelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  options: Record<string, any>[];
  className?: string;
  error?: boolean;
  optionValue?: string;
  optionKey?: string;
}

const EpicSelect = forwardRef<HTMLButtonElement, EpicSelectProps>(
  (
    {
      id,
      value,
      onChange,
      onBlur,
      placeholder = '',
      options = [],
      className = '',
      error = false,
      optionValue = 'value',
      optionKey = 'key',
    },
    ref
  ) => {
    return (
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          ref={ref}
          id={id}
          className={`w-full h-8 px-3 py-1 text-sm data-[placeholder]:text-gray-400 truncate rounded-sm ${error ? 'border-red-500 ring-red-500' : ''} ${className}`}
          onBlur={onBlur}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem
              key={opt[optionKey]}
              value={opt[optionValue]}
              className="truncate"
            >
              {opt[optionValue]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
);

EpicSelect.displayName = 'EpicSelect';

export default EpicSelect;