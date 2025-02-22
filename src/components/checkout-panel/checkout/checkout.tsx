import React from 'react';
import { useAppSelector } from '../../../hooks';
import { selectSelectedOffer } from '../../../slices/offers-slice';
import { GiftCard } from '../../common';
import { ValueOptionsContainer } from './value-options-container';
import checkoutPanelViewWrapper, { SetViewProps } from '../view-wrapper';
import CheckoutButton from './checkout-button';

import './checkout.less';

const CheckoutPanelView: React.FC<SetViewProps> = ({ setView }): React.ReactElement => {
    const selectedOffer = useAppSelector(selectSelectedOffer);
    return (
        <section className="checkout">
            <div className="grid grid--top-bottom grid--stretch-top">
                <div className="grid__item">
                    <section className="checkout__brand">
                        {selectedOffer && (
                            <>
                                <GiftCard
                                    name={selectedOffer.name}
                                    imgUrl={selectedOffer.image_url}
                                    altText={selectedOffer.name}
                                />
                                <ValueOptionsContainer
                                    valueOptions={selectedOffer.giftcard_list}
                                    currencyCode={selectedOffer.currency_code}
                                />
                            </>
                        )}
                    </section>
                </div>
                <div className="grid__item">
                    <section className="checkout__calculation">
                        <CheckoutButton setView={setView} />
                    </section>
                </div>
            </div>
        </section>
    );
};

export default checkoutPanelViewWrapper(CheckoutPanelView, 'checkout');
