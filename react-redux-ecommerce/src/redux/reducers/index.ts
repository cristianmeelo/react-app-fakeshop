import { combineReducers } from "@reduxjs/toolkit"
import { productReducer, selectedProductReducer } from "../products/reducer"

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
})

