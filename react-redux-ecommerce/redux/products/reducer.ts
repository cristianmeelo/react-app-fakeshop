import { ActionTypes } from "./action-types";

const initialState = {
    products: [{
        id: 1,
        title: "Dipesh",
        category: "programmer"
    }]
}

export const productReducer = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:

            break;

        default:
            break;
    }

}