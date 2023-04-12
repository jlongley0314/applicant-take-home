import React, { useState } from 'react';
import { Button } from '../../common';
import { useAppSelector } from '../../../hooks';
import { ViewEnum, selectSelectedValueOption } from '../../../slices/checkout-slice';
import { checkout } from '../../../utils/api/checkout';

type CheckoutButtonProps = {
    setView: (view: ViewEnum) => void;
};

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ setView }): React.ReactElement => {
    const selectedValueOption = useAppSelector(selectSelectedValueOption);
    const buttonText = 'Prizeout Gift Card';
    const [submitting, setSubmitting] = useState<boolean>(false);

    const buttonHandler = async () => {
        if (selectedValueOption) {
            setSubmitting(true);
            const checkoutResponse = await checkout(selectedValueOption);
            setSubmitting(false);
            if (checkoutResponse.success && checkoutResponse.offerValueOption) {
                setView('checkout-confirmation');
            }
        }
    };

    return (
        <>
            <Button
                ariaLabel="Prizeout your gift card"
                color={`primary`}
                onClick={buttonHandler}
                size="medium"
                text={buttonText}
                type="submit"
                isDisabled={!selectedValueOption || submitting}
            />
        </>
    );
};

export default CheckoutButton;
function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
