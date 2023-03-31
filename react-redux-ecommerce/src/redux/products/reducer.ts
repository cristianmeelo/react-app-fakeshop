import { ActionTypes } from "./action-types";



const initialState = {
	products: []
}

export const productReducer = (state: any = initialState, { type, payload }: any) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return { ...state, products: payload };

		default:
			return state;
	}
};

export const selectedProductReducer = (state: any = {}, { type, payload }: any) => {
	switch (type) {
		case ActionTypes.SELECTED_PRODUCT:
			return { ...state, ...payload };
		case ActionTypes.REMOVE_SELECTED_PRODUCTS:
			return {};

		default:
			return state;
	}
};
