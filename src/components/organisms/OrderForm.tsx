import React, { useState } from 'react';
import type { OrderFormData } from '../../types';
import { TradeSideSelector } from '../molecules/TradeSideSelector';
import { OrderTypeSelector } from '../molecules/OrderTypeSelector';
import { PriceInput } from '../molecules/PriceInput';
import { AmountInput } from '../molecules/AmountInput';
import { TimeInForceSelector } from '../molecules/TimeInForceSelector';
import { PostOnlyOption } from '../molecules/PostOnlyOption';
import { OrderTotal } from '../molecules/OrderTotal';
import { AccountValue } from '../molecules/AccountValue';
import { AccountBalances } from '../molecules/AccountBalances';
import { Button } from '../atoms/ButtonAtoms/Button';

interface OrderFormProps {
    onSubmit: (data: OrderFormData) => void;
    initialData?: Partial<OrderFormData>;
    baseCurrency?: string;
    quoteCurrency?: string;
}

export const OrderForm: React.FC<OrderFormProps> = ({
    onSubmit,
    initialData,
    baseCurrency = 'BTC',
    quoteCurrency = 'USD',
}) => {
    const [formData, setFormData] = useState<OrderFormData>({
        side: initialData?.side || 'buy',
        orderType: initialData?.orderType || 'limit',
        limitPrice: initialData?.limitPrice || '',
        amount: initialData?.amount || '',
        timeInForce: initialData?.timeInForce || 'good_till_cancelled',
        postOnly: initialData?.postOnly || false,
    });

    const [accountCurrency, setAccountCurrency] = useState<string>('NGN');
    const availableCurrencies = ['NGN', 'USD', 'EUR', 'GBP'];

    const handleChange = <K extends keyof OrderFormData>(field: K, value: OrderFormData[K]) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const getButtonLabel = () => {
        return `${formData.side === 'buy' ? 'Buy' : 'Sell'} ${baseCurrency}`;
    };

    const buttonColorClass = formData.side === 'buy' ? 'bg-accent-gradient' : 'bg-negative';

    return (
        <form onSubmit={handleSubmit} className="p-2 rounded">
            <TradeSideSelector
                activeSide={formData.side}
                onChange={(side) => handleChange('side', side)}
            />

            <OrderTypeSelector
                activeType={formData.orderType}
                onChange={(type) => handleChange('orderType', type)}
            />

            {formData.orderType !== 'market' && (
                <PriceInput
                    value={formData.limitPrice}
                    onChange={(price) => handleChange('limitPrice', price)}
                    currency={quoteCurrency}
                    label={"Trigger Price"}
                />
            )}

            {formData.orderType !== 'market' && (
                <PriceInput
                    value={formData.limitPrice}
                    label={"Limit Price"}
                    onChange={(price) => handleChange('limitPrice', price)}
                    currency={quoteCurrency}
                />
            )}

            <AmountInput
                value={formData.amount}
                onChange={(amount) => handleChange('amount', amount)}
                currency={quoteCurrency}
            />

            <TimeInForceSelector
                value={formData.timeInForce}
                onChange={(timeInForce) => handleChange('timeInForce', timeInForce)}
            />

            <PostOnlyOption
                checked={formData.postOnly}
                onChange={(checked) => handleChange('postOnly', checked)}
            />

            <OrderTotal
                amount={formData.amount}
                price={formData.limitPrice}
                currency={quoteCurrency}
            />

            <Button
                type="submit"
                variant="primary"
                fullWidth
                className={`mb-4 ${buttonColorClass}`}
            >
                {getButtonLabel()}
            </Button>

            <AccountValue
                value="0.00"
                currency={accountCurrency}
                availableCurrencies={availableCurrencies}
                onCurrencyChange={setAccountCurrency}
            />

            <AccountBalances
                openOrdersValue="0.00"
                availableValue="0.00"
            />

            <Button variant="secondary" fullWidth>
                Deposit
            </Button>
        </form>
    );
};