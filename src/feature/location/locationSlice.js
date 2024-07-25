import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPosition : {}
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setPosition: (state, action) => {
            state.currentPosition = action.payload.position;
        }
    }
})

export const {setPosition} = locationSlice.actions
export default locationSlice.reducer;