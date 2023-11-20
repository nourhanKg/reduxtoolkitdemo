import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    username: "",
    userId: "",
    isAuthenticated: true
}
const userSlice = createSlice(
    {
        name: "user",
        initialState,
        reducers: {
            login(state, action) {
                state.isAuthenticated = true;
                state.username = action.payload.username;
            },
            logout(state) {
                state.isAuthenticated = false;
                state.username = "";
            }
        }
    }
)
export const userActions = userSlice.actions; //These are action creators based on the reducers function we defined
export default userSlice;