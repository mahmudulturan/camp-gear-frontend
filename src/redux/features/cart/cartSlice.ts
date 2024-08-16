import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../productsApi"

interface ICartProduct extends IProduct {
    quantity: number
}

export interface ICartState {
    items: ICartProduct[];
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
            const isExist = state.items.find(item => item._id === action.payload._id);
            if (isExist) {
                state.items = state.items.map(item => {
                    if (item._id === action.payload._id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    state.totalPrice = action.payload.price.amount + state.totalPrice;
                    return item
                })
            } else {
                state.items = [...state.items, { ...action.payload, quantity: 1 }];
                state.totalPrice = action.payload.price.amount + state.totalPrice;
            }
        },
        removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
            const item = state.items.find(item => item._id === action.payload._id);
            state.items = state.items.filter(item => item._id !== action.payload._id);
            state.totalPrice = state.totalPrice - (item!.price.amount * item!.quantity);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;