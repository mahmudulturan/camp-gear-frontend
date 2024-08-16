import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
        addToCart: (state, action: PayloadAction<IProduct>) => {
            state.items = [...state.items, action.payload];
            state.totalPrice = action.payload.price.amount + state.totalPrice;
        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;