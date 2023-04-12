import React from 'react';
import { Button } from '../../common';
import { useAppSelector } from '../../../hooks';
import { selectSelectedValueOption } from '../../../slices/checkout-slice';
import { PrizeoutOfferValueOptions } from '../../../slices/offers-slice';

const CheckoutButton: React.FC = (): React.ReactElement => {
    const selectedValueOption = useAppSelector(selectSelectedValueOption);
    const buttonText = 'Prizeout Gift Card';

    const checkout = (data: PrizeoutOfferValueOptions) => {
        return new Promise<{success: boolean}>((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve({success: true});
                }
            }, 500)
        })
    }

    const buttonHandler = async () => {
        // TODO: get the selected value options and send to mock api
        // when the checkout api resolves, set the view as "checkout-confirmation"
        // add a toggle
        if (selectedValueOption) {
            const checkoutResponse = checkout(selectedValueOption)
            console.log("checkout response", checkoutResponse);
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
                isDisabled={!selectedValueOption}
            />
        </>
    );
};

export default CheckoutButton;
