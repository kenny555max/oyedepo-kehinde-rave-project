import React from 'react';

interface LabeledValueProps {
    label: string;
    value: React.ReactNode;
    className?: string;
}

export const LabeledValue: React.FC<LabeledValueProps> = ({ label, value, className }) => {
    return (
        <div className={`flex justify-between items-center ${className || ''}`}>
            <span className="text-sm text-text-secondary">{label}</span>
            <span className="text-text-primary">{value}</span>
        </div>
    );
};