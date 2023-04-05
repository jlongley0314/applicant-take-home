import React from 'react';
import { PrizeoutOfferValueOptions } from '../../../slices/offers-slice';
import { Button } from '../../common';

interface CostOptionsContainerProps {
    costOptions: PrizeoutOfferValueOptions[];
}

export const CostOptionsContainer: React.FC<CostOptionsContainerProps> = ({ costOptions }): React.ReactElement => {
    return (
        <>
            {costOptions.map((option) => (
                <Button
                    key={option.checkout_value_id}
                    ariaLabel={option.checkout_value_id}
                    color={`primary`}
                    // onClick={buttonHandler}
                    size="small"
                    text={`${option.value_in_cents}`}
                />
            ))}
        </>
    );
};
