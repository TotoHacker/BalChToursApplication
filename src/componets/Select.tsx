import React from 'react';

interface SelectProps {
  label?: string;
  name: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ label, name, value, options, onChange, className = '' }) => (
  <div className={`flex flex-col w-full ${className}`}>
    {label && <label htmlFor={name} className="mb-1 text-sm font-medium text-dark">{label}</label>}
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-muted rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);
