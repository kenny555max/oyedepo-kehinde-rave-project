import React from 'react';
import {Button} from "../atoms/ButtonAtoms/Button.tsx";

interface TimeSelectorProps {
    activeTime: string;
    onTimeChange: (time: string) => void;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({
  activeTime,
  onTimeChange
}) => {
    const timeOptions = ['1H', '2H', '4H', '1D', '1W', '1M'];

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-text-secondary mr-2">Time</span>
            <div className="flex gap-x-2">
                {timeOptions.map((time) => (
                    <Button
                        key={time}
                        variant="text"
                        size="sm"
                        className={"line-height-16px"}
                        active={activeTime === time}
                        onClick={() => onTimeChange(time)}
                    >
                        {time}
                    </Button>
                ))}
            </div>
        </div>
    );
};