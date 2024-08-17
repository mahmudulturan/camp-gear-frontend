import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../productsApi"

interface ICartProduct extends IProduct {
    quantity: number
}

export interface ICartState {
    items: ICartProduct[];
    totalPrice: number;
    totalItems: number;
}

const initialState: ICartState = {
    items: [],
    totalPrice: 0,
    totalItems: 0
}


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            state.totalPrice = action.payload.price.amount + state.totalPrice;
            const isExist = state.items.find(item => item._id === action.payload._id);
            if (isExist) {
                if (isExist?.quantity > isExist?.inventory.quantity - 1) {
                    return;
                }
                state.items = state.items.map(item => {
                    if (item._id === action.payload._id) {
                        state.totalItems++;
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                })
            } else {
                state.totalItems++;
                state.items = [...state.items, { ...action.payload, quantity: 1 }];

            }
        },
        removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
            const item = state.items.find(item => item._id === action.payload._id);
            state.items = state.items.filter(item => item._id !== action.payload._id);
            state.totalPrice = state.totalPrice - (item!.price.amount * item!.quantity);
            state.totalItems = state.totalItems - item!.quantity;
        },
        increaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
            state.totalItems++;
            state.items = state.items.map(item => {
                if (item._id === action.payload._id) {
                    state.totalPrice = item!.price.amount + state.totalPrice;
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
        },
        decreaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
            state.totalItems--;
            state.items = state.items.map(item => {
                if (item._id === action.payload._id) {
                    state.totalPrice = state.totalPrice - item.price.amount;
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
        },
        removeAllCartItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.totalItems = 0;
        }
    }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, removeAllCartItems } = cartSlice.actions;

export default cartSlice.reducer;