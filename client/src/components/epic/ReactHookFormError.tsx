import clsx from 'clsx';
import React from 'react';

interface ReactHookFormErrorProps {
  message?: string;
}

const ReactHookFormError: React.FC<ReactHookFormErrorProps> = ({ message }) => {

  return (
    <p className={clsx("text-red-500 text-xs h-4 lowercase")}>
      {message}
    </p>
  );
};

export default ReactHookFormError;
