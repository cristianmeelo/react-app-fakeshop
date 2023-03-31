import { ActionTypes } from "./action-types"

export const setProducts = (products: any) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	}
}
export const selectedProduct = (product: any) => {
	return {
		type: ActionTypes.SELECTED_PRODUCT,
		payload: product,
	}
}

export const removeSelectedProduct = () => {
	return {
		type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
	}
}
