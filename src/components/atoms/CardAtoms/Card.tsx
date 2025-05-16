import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-primary-bg border border-primary-border rounded-md overflow-hidden ${className}`}>
            {children}
        </div>
    );
};