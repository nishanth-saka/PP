import { configureStore } from "@reduxjs/toolkit";
import networkReducer from '../feature/network/networkSlice'

export const store = configureStore({
    reducer: {
        network: networkReducer
    }
})

