import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'default' | 'outline';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', className, children }) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        variant === 'default' && 'bg-primary text-primary-foreground hover:bg-primary/90',
        variant === 'outline' && 'border border-input hover:bg-accent hover:text-accent-foreground',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
