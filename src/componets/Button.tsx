import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}
export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = 'px-4 py-2 rounded-md font-medium w-full';
  const variantStyle = variant === 'primary'
    ? 'bg-primary text-light hover:bg-secondary'
    : 'bg-muted text-dark hover:bg-primary';

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {label}
    </button>
  );
};