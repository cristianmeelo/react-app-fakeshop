import { ActionTypes } from "./action-types";



const initialState = {
	products: [{
		id: 1,
		title: "Dipesh",
		category: "programmer"
	}]
}

export const productReducer = (state: any = initialState, { type, payload }: any) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return state;


		default:
			return state;

	}

}