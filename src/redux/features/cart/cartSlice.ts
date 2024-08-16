import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../productsApi"

export interface ICartState {
    items: IProduct[];
    totalPrice: number
}

const initialState: ICartState = {
    items: [],
    totalPrice: 0
}


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            state.items = [...state.items, payload];
            state.totalPrice = payload.price + state.totalPrice;
        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;