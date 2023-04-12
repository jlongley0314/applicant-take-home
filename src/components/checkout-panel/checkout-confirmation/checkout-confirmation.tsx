import React from 'react';
import PropTypes from 'prop-types';
import checkoutPanelViewWrapper, { SetViewProps } from '../view-wrapper';
import './checkout-confirmation.less';
import { useAppSelector } from '../../../hooks';
import { selectSelectedOffer } from '../../../slices/offers-slice';
import { useResetCheckoutState } from '../../../utils/hooks/useResetCheckoutState';
import { Button } from '../../common/form-components/button';

const CheckoutConfirmationPanelView: React.FC<SetViewProps> = ({ setView }): React.ReactElement => {
    const selectedOffer = useAppSelector(selectSelectedOffer);
    const { resetCheckoutState } = useResetCheckoutState();

    const clickHandler = () => {
        setView('checkout');
        resetCheckoutState();
    };

    return (
        <section className="checkout-confirmation">
            <h2 className="selected-offer-title">{`Successfully Checked Out Offer: ${selectedOffer?.name}`}</h2>
            <Button ariaLabel="Done" color={`primary`} onClick={clickHandler} size="small" text="Done" />
        </section>
    );
};

CheckoutConfirmationPanelView.propTypes = {
    setView: PropTypes.func,
};

export default checkoutPanelViewWrapper(CheckoutConfirmationPanelView, 'checkout-confirmation');
