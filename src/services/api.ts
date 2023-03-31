import axios from "axios";

export const api = axios.create({
    baseURL: "http://fakestoreapi.com",
});


export const fetchProducts = async () => {
    return api.get("/products",);
};

export const fetchProductDetail = async (productId: string | undefined) => {
    return api.get(`/products/${productId}`);
};