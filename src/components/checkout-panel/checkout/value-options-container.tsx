import React from 'react';
import { PrizeoutOfferValueOptions } from '../../../slices/offers-slice';
import { Button } from '../../common';
import './value-options-container.less';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { selectSelectedValueOption, setSelectedValueOption } from '../../../slices/checkout-slice';
import { useAppSelector } from '../../../hooks';
import { convertCentsToDollar } from '../../../utils/functions/convertCentsToDollars';
import { SelectedValueOptionData } from './selected-value-option-data';

interface ValueOptionsContainerProps {
    currencyCode?: string;
    valueOptions: PrizeoutOfferValueOptions[];
}

export const ValueOptionsContainer: React.FC<ValueOptionsContainerProps> = ({
    valueOptions,
    currencyCode,
}): React.ReactElement => {
    const selectedValueOption = useAppSelector(selectSelectedValueOption);
    const dispatch = useDispatch<AppDispatch>();

    const isCurrentlySelected = (option: PrizeoutOfferValueOptions) =>
        selectedValueOption?.checkout_value_id === option.checkout_value_id;

    const valueOptionClickHandler = (option: PrizeoutOfferValueOptions) => {
        dispatch(setSelectedValueOption(isCurrentlySelected(option) ? undefined : option));
    };

    return (
        <>
            <div className="value-options-container">
                {valueOptions.map((option) => (
                    <Button
                        key={option.checkout_value_id}
                        ariaLabel={option.checkout_value_id}
                        onClick={() => valueOptionClickHandler(option)}
                        color={isCurrentlySelected(option) ? 'primary' : undefined}
                        size="small"
                        text={`${convertCentsToDollar(option.cost_in_cents, currencyCode)}`}
                    />
                ))}
            </div>
            {selectedValueOption && <SelectedValueOptionData valueOption={selectedValueOption} />}
        </>
    );
};
