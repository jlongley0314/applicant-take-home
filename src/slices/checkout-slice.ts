import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { PrizeoutOfferValueOptions } from './offers-slice';

export interface CheckoutSlice {
    isCollapsedCheckoutPanelOpen: boolean;
    loading: boolean;
    view: ViewEnum;
    selectedValueOption?: PrizeoutOfferValueOptions;
}

export type ViewEnum = 'checkout' | 'checkout-confirmation';

export const checkoutInitialState: CheckoutSlice = {
    isCollapsedCheckoutPanelOpen: false,
    loading: false,
    selectedValueOption: undefined,
    view: 'checkout',
};

export const checkoutSlice = createSlice({
    initialState: checkoutInitialState,
    name: 'checkout',
    reducers: {
        setCheckoutView(state, action: PayloadAction<ViewEnum>) {
            state.view = action.payload;
        },
        setSelectedValueOption(state, action: PayloadAction<PrizeoutOfferValueOptions>) {
            state.selectedValueOption = action.payload;
        },
        toggleIsCollapsedCheckoutPanelOpen(state) {
            state.isCollapsedCheckoutPanelOpen = !state.isCollapsedCheckoutPanelOpen;
        },
        toggleIsLoading(state) {
            state.loading = !state.loading;
        },
    },
});

export const { setCheckoutView, setSelectedValueOption, toggleIsCollapsedCheckoutPanelOpen, toggleIsLoading } =
    checkoutSlice.actions;

export const selectLoading = ({ checkout: { loading } }: RootState): boolean => loading;

export const selectCheckoutView = ({ checkout: { view } }: RootState): ViewEnum => view;

export const selectIsCollapsedCheckoutPanelOpen = ({
    checkout: { isCollapsedCheckoutPanelOpen },
}: RootState): boolean => isCollapsedCheckoutPanelOpen;

export const selectSelectedValueOption = ({
    checkout: { selectedValueOption },
}: RootState): PrizeoutOfferValueOptions => selectedValueOption;

export default checkoutSlice.reducer;
