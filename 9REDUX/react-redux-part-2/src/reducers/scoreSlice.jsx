import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    score: 0,
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.score += action.payload;
        }, 
    },
})

export const { increment, decrement } = scoreSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(increment(amount));
    }, 2000);
}



export default scoreSlice.reducer;