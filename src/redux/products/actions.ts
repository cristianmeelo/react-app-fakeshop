import { ActionTypes } from './action-types';

export const setProducts = (products: IProduct[]) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product: IProduct) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
