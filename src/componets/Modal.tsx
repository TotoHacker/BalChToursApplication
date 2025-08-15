import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, className = '' }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-light rounded-2xl shadow-lg p-6 w-full max-w-md ${className}`}>
        {title && <h2 className="text-xl font-bold mb-4 text-dark">{title}</h2>}
        {children}
        <div className="mt-4 text-right">
          <button onClick={onClose} className="text-primary hover:underline">Cerrar</button>
        </div>
      </div>
    </div>
  );
};