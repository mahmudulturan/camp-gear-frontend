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
    image: string;
    rating: IRating;
    inventory: IInventory;
}

interface IResponseGetProducts {
    success: boolean;
    message: string;
    data: {
        products: IProduct[];
        productsCount: number;
    };
}

interface IResponseGetAProduct {
    success: boolean;
    message: string;
    data: IProduct;
}

interface IResponseCategories {
    success: boolean;
    message: string;
    data: string[];
}

interface IQuery {
    searchKey: string;
    sortOrder: string;
    sortProperty: string;
    filterValue: string;
    page: number;
}

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<IResponseGetProducts, IQuery>({
            query: ({ searchKey, sortOrder, page, sortProperty, filterValue }) => `/products?searchKey=${searchKey}&filter=${filterValue}&sort=${sortProperty}&order=${sortOrder}&page=${page}&limit=8`,
            providesTags: ['products']
        }),
        getAProduct: builder.query<IResponseGetAProduct, string>({
            query: (id) => (`/products/${id}`),
            providesTags: ['products']
        }),
        getCategories: builder.query<IResponseCategories, void>({
            query: () => '/products/categories',
            providesTags: ['products']
        }),
        postAProduct: builder.mutation<IResponseGetAProduct, Partial<IProduct>>({
            query: (product) => ({
                url: '/products',
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['products']
        }),
        deleteAProduct: builder.mutation<IResponseGetAProduct, string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['products']
        }),
        updateAProduct: builder.mutation<IResponseGetAProduct, Partial<IProduct>>({
            query: (product) => ({
                url: `/products/${product._id}`,
                method: 'PUT',
                body: product
            }),
            invalidatesTags: ['products']
        })
    })
});

export const { useGetProductsQuery, useGetAProductQuery, usePostAProductMutation, useDeleteAProductMutation, useUpdateAProductMutation, useGetCategoriesQuery } = productsApi;