import { ActionTypes } from './action-types';

const initialState: ProductReducerState = {
  products: [],
};
const selectedProductInitialState: SelectedProductReducerState = {};

export const productReducer = (state: ProductReducerState = initialState, { type, payload }: ProductAction) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state: SelectedProductReducerState = selectedProductInitialState, { type, payload }: SelectedProductAction) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};

    default:
      return state;
  }
};
