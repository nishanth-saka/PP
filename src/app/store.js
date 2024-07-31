import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import networkReducer from '../feature/network/networkSlice'
import locationReducer from '../feature/location/locationSlice'
import microphoneReducer from '../feature/media/microphone/microphoneSlice'
import cameraReducer from '../feature/media/camera/cameraSlice'

import { userApi } from '../api/auth/google/userApi';

export const store = configureStore({
    reducer: {
        network: networkReducer,
        location: locationReducer,
        microphone: microphoneReducer,
        camera: cameraReducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)

