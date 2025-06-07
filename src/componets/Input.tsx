import React from 'react';

interface InputProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  className = ''
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && <label htmlFor={name} className="mb-1 text-sm font-medium text-dark">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-muted rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && <span className="text-danger text-xs mt-1">{error}</span>}
    </div>
  );
};