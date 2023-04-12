import { PrizeoutOfferValueOptions } from '../../slices/offers-slice';

export const checkout = (data: PrizeoutOfferValueOptions) => {
    return new Promise<{ success: boolean; offerValueOption: PrizeoutOfferValueOptions }>((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve({
                    offerValueOption: data,
                    success: true,
                });
            }
        }, 1000);
    });
};
