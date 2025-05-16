import React, {useState, useRef, useEffect} from 'react';

interface OrderTypeHelpProps {
    title: string;
    content: string;
}

export const OrderTypeHelp: React.FC<OrderTypeHelpProps> = ({ title, content }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
                setIsTooltipVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block">
            <button
                type="button"
                onClick={() => setIsTooltipVisible(!isTooltipVisible)}
                className="text-text-secondary hover:text-text-primary focus:outline-none"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>

            {isTooltipVisible && (
                <div
                    ref={tooltipRef}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-primary-bg border border-secondary-border rounded shadow-lg z-50"
                >
                    <h4 className="font-medium text-text-primary mb-1">{title}</h4>
                    <p className="text-sm text-text-secondary">{content}</p>
                </div>
            )}
        </div>
    );
};