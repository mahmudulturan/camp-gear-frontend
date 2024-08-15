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
    title: string;
    description: string;
    price: IPrice;
    category: string;
    image: string[];
    rating: IRating;
    inventory: IInventory;
}

interface IResponseGetProducts {
    success: boolean;
    message: string;
    data: IProduct[];
}

interface IResponseGetAProduct {
    success: boolean;
    message: string;
    data: IProduct;
}


const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<IResponseGetProducts, void>({
            query: () => '/products'
        }),
        getAProduct: builder.query<IResponseGetAProduct, string>({
            query: (id) => (`/products/${id}`),
        })
    })
});

export const { useGetProductsQuery, useGetAProductQuery } = productsApi;