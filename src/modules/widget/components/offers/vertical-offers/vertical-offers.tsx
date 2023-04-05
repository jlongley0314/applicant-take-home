import React, { useMemo } from 'react';
import Classnames from 'classnames';
import { PrizeoutOffer, PrizeoutOfferSettings, selectSelectedOffer, setSelectedOffer } from '../../../../../slices/offers-slice';
import { OfferGiftCard } from '../offer-gift-card/offer-gift-card';
import { useAppSelector } from '../../../../../hooks';
import { selectIsCheckoutPanelCollapsed } from '../../../../../slices/common-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store';
import { toggleIsCollapsedCheckoutPanelOpen } from '../../../../../slices/checkout-slice';

import './vertical-offers.less';

interface OfferView {
    offers: PrizeoutOffer[];
    viewSettings?: PrizeoutOfferSettings;
}

const VerticalOffers: React.FC<OfferView> = ({ offers, viewSettings }): React.ReactElement => {
    const isCheckoutPanelCollapsedView = useAppSelector(selectIsCheckoutPanelCollapsed);
    const selectedOffer = useAppSelector(selectSelectedOffer);
    const heading = viewSettings.title || 'Recommended for you';
    const classes: string = Classnames('vertical-offers');
    const dispatch = useDispatch<AppDispatch>();

    const activeOfferId: string | undefined = useMemo(() => {
        if (selectedOffer) {
            const activeOffer = offers.find((offer) => offer.giftcard_list[0].checkout_value_id === selectedOffer.giftcard_list[0].checkout_value_id)
            if (activeOffer) {
                return activeOffer.giftcard_list[0].checkout_value_id;
            }
        }
    }, [selectedOffer, offers])

    const offerClickHandler = (offer: PrizeoutOffer) => {
        dispatch(setSelectedOffer)
        if (isCheckoutPanelCollapsedView) {
            dispatch(toggleIsCollapsedCheckoutPanelOpen());
        }
    };

    const returnOffers = () => {
        return offers.map((offer) => (
            <OfferGiftCard
                key={`${heading}-${offer.name}`}
                offer={offer}
                onClickHandler={() => offerClickHandler(offer)}
                activeOfferId={activeOfferId}
            />
        ));
    };

    return (
        <div className={classes}>
            <h2>{heading}</h2>
            {offers && <div className="vertical-offers__gift-cards">{returnOffers()}</div>}
        </div>
    );
};

export default VerticalOffers;
