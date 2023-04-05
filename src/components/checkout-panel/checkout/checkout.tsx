import React from 'react';
import { useAppSelector } from '../../../hooks';
import { selectSelectedOffer } from '../../../slices/offers-slice';
import { GiftCard } from '../../common';
import checkoutPanelViewWrapper from '../view-wrapper';
import CheckoutButton from './checkout-button';

import './checkout.less';
import { CostOptionsContainer } from './cost-options-container';

const CheckoutPanelView: React.FC = (): React.ReactElement => {
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
                                <CostOptionsContainer costOptions={selectedOffer.giftcard_list} />
                            </>
                        )}
                    </section>
                </div>
                <div className="grid__item">
                    <section className="checkout__calculation">
                        <CheckoutButton />
                    </section>
                </div>
            </div>
        </section>
    );
};

export default checkoutPanelViewWrapper(CheckoutPanelView, 'checkout');
