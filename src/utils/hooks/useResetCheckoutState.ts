import { useDispatch } from 'react-redux';
import { setSelectedValueOption } from '../../slices/checkout-slice';
import { AppDispatch } from '../../store';
import { setSelectedOffer } from '../../slices/offers-slice';

export const useResetCheckoutState = () => {
    const dispatch = useDispatch<AppDispatch>();

    const resetCheckoutState = (): void => {
        dispatch(setSelectedOffer());
        dispatch(setSelectedValueOption());
    };

    return {
        resetCheckoutState,
    };
};
