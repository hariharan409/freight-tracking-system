import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import ReactHookFormError from '@/components/epic/ReactHookFormError';
import EpicLabel from '@/components/epic/EpicLabel';
import clsx from 'clsx';

interface EpicFileUploadProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  control: Control<T>;
  rules?: Omit<RegisterOptions<T, Path<T>>, 'setValueAs' | 'disabled'>;
  required?: boolean;
  accept?: string;
  multiple?: boolean;
  textFieldClassName?: string;
  inputClassName?: string;
  showLabel?: boolean;
}

const EpicFileUpload = <T extends FieldValues>({
  name,
  label,
  control,
  rules = {},
  required = false,
  accept = '',
  multiple = false,
  textFieldClassName = '',
  inputClassName = '',
  showLabel = true,
}: EpicFileUploadProps<T>) => {
  return (
    <div className={clsx('mb-0', textFieldClassName)}>
      {showLabel && (
        <EpicLabel htmlFor={name} label={label || ''} required={required} />
      )}
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${label} is required` : false,
          ...rules,
        }}
        render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
          <>
            <input
              type="file"
              onChange={(e) => {
                const files = e.target.files;
                onChange(multiple ? files : files?.[0] || null);
              }}
              accept={accept}
              multiple={multiple}
              ref={ref}
              className={clsx('file-input border-2', inputClassName)}
            />

            {/* Show uploaded file name if value is a string (edit mode) */}
            {value && typeof value === 'string' && (
              <div className="mt-2">
                <a
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  📎 {decodeURIComponent(value.split('/').pop() || 'Download File')}
                </a>
              </div>
            )}

            {/* Show selected file name if user selects during new upload */}
            {value instanceof File && (
              <div className="mt-2">📁 {value.name}</div>
            )}

            <ReactHookFormError message={error?.message} />
          </>
        )}
      />
    </div>
  );
};

export default EpicFileUpload;
