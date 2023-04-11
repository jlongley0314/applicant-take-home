import React from 'react';
import { PrizeoutOfferValueOptions } from '../../../slices/offers-slice';
import './selected-value-option-data.less';
import { convertCentsToDollar } from '../../../utils/functions/convertCentsToDollars';

interface SelectedValueOptionDataProps {
    valueOption: PrizeoutOfferValueOptions;
}

export const SelectedValueOptionData: React.FC<SelectedValueOptionDataProps> = ({ valueOption }) => {
    return (
        <div className="selected-option-data-container">
            <div className="selected-option-data-field">
                <p>Redemption Amount</p>
                <p>{convertCentsToDollar(valueOption.cost_in_cents)}</p>
            </div>
            <div className="selected-option-data-field">
                <p className="selected-option-data-field__bonus-text">{`Prizeout Bonus (+${valueOption.display_bonus}%)`}</p>
                <p className="selected-option-data-field__bonus-text">
                    {convertCentsToDollar(Math.floor(valueOption.value_in_cents * (valueOption.display_bonus / 100)))}
                </p>
            </div>
            <div className="selected-option-data-field">
                <p>You Get</p>
                <p>{convertCentsToDollar(valueOption.value_in_cents)}</p>
            </div>
        </div>
    );
};
