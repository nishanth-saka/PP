import { createSlice } from "@reduxjs/toolkit";

const NETWORK_CONNECTED = true
const NETWORK_DISCONNECTED = false

const initialState = {
    networkStatus : NETWORK_DISCONNECTED
}

export const networkSlice = createSlice({
    name: 'network',
    initialState,
    reducers: {
        connected: (state) => {
            state.networkStatus = NETWORK_CONNECTED
        },
        disconnected: (state) => {
            state.networkStatus = NETWORK_DISCONNECTED
        }
    },
})

export const {connected, disconnected} = networkSlice.actions
export default networkSlice.reducer