import baseApi from "../baseApi";

export interface IPrice {
    amount: number;
    discount: number;
};

export interface IRating {
    rate: number;
    count: number;
}
export interface IInventory {
    quantity: number;
    inStock: boolean;
};

export interface IProduct {
    _id: string;
    name: string;
    description: string;
    price: IPrice;
    category: string;
    image: string[];
    rating: IRating;
    inventory: IInventory;
}

interface IResponse {
    success: boolean;
    message: string;
    data: IProduct[];
}


const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<IResponse, void>({
            query: () => '/products'
        })
    })
});

export const { useGetProductsQuery } = productsApi;