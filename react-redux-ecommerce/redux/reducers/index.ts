import { combineReducers } from "@reduxjs/toolkit"
import { productReducer } from "../products/reducer"

export const reducers = combineReducers({
    allProducts: productReducer,
})

