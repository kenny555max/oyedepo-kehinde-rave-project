import React from 'react';

interface CardBodyProps {
    children: React.ReactNode;
    className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => {
    return (
        <div className={`flex-grow p-2 ${className}`}>
            {children}
        </div>
    );
};