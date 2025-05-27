import clsx from 'clsx';
import React from 'react';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface EpicLabelProps {
  htmlFor: string;
  label: string;
  required?: boolean;
  className?: string;
  tooltipText?: string;
  showInfo?: boolean
}

const EpicLabel: React.FC<EpicLabelProps> = ({
  htmlFor,
  label,
  required = false,
  className = '',
  showInfo,
  tooltipText,
}) => {
  return (
    <div className="flex items-center gap-2 mb-2">
        <label htmlFor={htmlFor} className={clsx('block font-medium text-gray-700', className)}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {showInfo && <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="w-4 h-4 text-black cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent>
            <p className="text-xs">{tooltipText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>}
    </div>
    
  );
};

export default EpicLabel;
