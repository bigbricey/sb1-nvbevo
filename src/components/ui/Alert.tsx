import React, { ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
  className?: string;
}

export const Alert = ({ children, className }: AlertProps) => (
  <div className={`border-l-4 p-4 ${className}`}>{children}</div>
);

export const AlertDescription = ({ children }: { children: ReactNode }) => (
  <div>{children}</div>
);
