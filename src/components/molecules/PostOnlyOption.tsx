
import React from 'react';
import { Checkbox } from '../atoms/FormAtoms/Checkbox';
import { OrderTypeHelp } from '../atoms/OrderTypeHelp';

interface PostOnlyOptionProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const PostOnlyOption: React.FC<PostOnlyOptionProps> = ({ checked, onChange }) => {
    return (
        <div className="mb-4 flex items-center">
            <Checkbox
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                label="Post Only"
            />
            <div className="ml-2">
                <OrderTypeHelp
                    title="Post Only"
                    content="If enabled, your order will only be executed as a maker, not a taker"
                />
            </div>
        </div>
    );
};