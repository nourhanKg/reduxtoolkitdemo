import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: [],
    total: 0,
    loading: false,
    error: ""
}
export const getCart = createAsyncThunk("cart/getCart", async() => {
    const res = await fetch("http://localhost:3001/cart");
    return res.json();
})
const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            
        },
        extraReducers: {
            [getCart.fulfilled]: (state, action) => {
                console.log(action);
                state.loading = false;
                state.items = action.payload.items;
                state.total = action.payload.totalAmount;
            },
            [getCart.pending]: (state, action) => {
                console.log(action);
                state.loading = true;
            },
            [getCart.rejected]: (state, action) => {
                console.log(action);
                state.loading = false;
                state.error = action.error.message
                console.log(state)
            },
        },
    }
)
export const cartActions = cartSlice.actions; //These are action creators based on the reducers function we defined
export default cartSlice;