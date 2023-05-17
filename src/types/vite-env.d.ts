/// <reference types="vite/client" />

/*  interface with the attributes of the objects of the products available in the store */
interface IProduct {
  title: string;
  id: number;
  price: number;
  category: string;
  image: string;
  description: string;
}

interface ProductsReducer {
  allProducts: {
    products: IProduct[];
  };
}

interface ProductReducer {
  product: IProduct;
}

interface ProductReducerState {
  products: IProduct[];
}
interface SelectedProductReducerState {}

interface ProductAction {
  type: ActionTypes.SET_PRODUCTS;
  payload: IProduct[];
}

interface SelectedProductAction {
  type: ActionTypes.SELECTED_PRODUCT | ActionTypes.REMOVE_SELECTED_PRODUCTS;
  payload: IProduct;
}
