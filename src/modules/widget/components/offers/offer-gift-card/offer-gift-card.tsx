import React, { useMemo } from 'react';
import Classnames from 'classnames';
import { GiftCard, BonusTag } from '../../../../../components/common/';
import { PrizeoutOffer, selectSelectedOffer } from '../../../../../slices/offers-slice';

import './offer-gift-card.less';
import { useAppSelector } from '../../../../../hooks';

interface OfferGiftCardProps {
    offer: PrizeoutOffer;
    onClickHandler: () => void;
    activeOfferId: string;
}

export const OfferGiftCard: React.FC<OfferGiftCardProps> = ({ offer, onClickHandler, activeOfferId }): React.ReactElement => {
    const firstGiftCard = offer.giftcard_list[0];
    const offerType = firstGiftCard.display_monetary_bonus ? 'monetary' : 'percentage';
    const offerValue = firstGiftCard.display_bonus;
    const classes: string = Classnames('offer-gift-card', {
        'offer-gift-card--selected': activeOfferId === firstGiftCard.checkout_value_id,
    });

    const selectOfferOnEnter = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
            onClickHandler();
        }
    };

    return (
        <div
            className={classes}
            onClick={() => onClickHandler()}
            onKeyDown={(event) => selectOfferOnEnter(event)}
            role="button"
            tabIndex={0}
        >
            <GiftCard name={offer.name} imgUrl={offer.image_url} altText={offer.name} className="offer" />
            {offerValue > 0 && <BonusTag type={offerType} value={offerValue} size="small" />}
        </div>
    );
};
