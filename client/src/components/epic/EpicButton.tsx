import React from 'react';
import clsx from 'clsx';

type EpicButtonProps = {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
};

const EpicButton: React.FC<EpicButtonProps> = ({
  label,
  onClick,
  type = 'button',
  size = 'small',
  variant = 'primary',
  className = '',
  disabled = false,
}) => {
  const baseStyles = 'px-2 py-1 rounded-[2px] font-semibold focus:outline-none transition-colors';

  const sizeStyles: Record<string, string> = {
    small: 'text-sm px-4 py-2',
    medium: 'text-base px-6 py-3',
    large: 'text-lg px-8 py-4',
  };

  const variantStyles: Record<string, string> = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {label}
    </button>
  );
};

export default EpicButton;
