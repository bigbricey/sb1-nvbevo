import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => (
  <div className={`border rounded-lg shadow ${className}`}>{children}</div>
);

export const CardHeader = ({ children, className }: CardProps) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className }: CardProps) => (
  <h2 className={`text-lg font-bold ${className}`}>{children}</h2>
);

export const CardContent = ({ children, className }: CardProps) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
