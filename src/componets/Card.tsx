import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, children, className = '' }) => (
  <div className={`bg-light rounded-2xl shadow-md p-4 w-full h-full ${className}`}>
    {title && <h3 className="text-lg font-semibold mb-2 text-dark">{title}</h3>}
    {children}
  </div>
);