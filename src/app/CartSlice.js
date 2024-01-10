import { createSlice } from "@reduxjs/toolkit";
 const initialState = {
    cartState:false,
    CartItems:[],
 }
const CartSlice = createSlice({
    initialState,
    name:"cart",
    reducers:{
        setOpenCart:(state,action) => {
            state.cartState = action.
            payload.cartState;

        },
        setCloseCart:(state,action) => {
            state.cartState = action.
            payload.cartState;

        },
        setAddItemToCart:(state,action) => {
            state.CartItems.push(action.payload)
        }
    }
});
export const { setOpenCart, setCloseCart } = CartSlice.actions;
export const selectCartState = (state) =>state.cart.cartState;
export default CartSlice.reducer;