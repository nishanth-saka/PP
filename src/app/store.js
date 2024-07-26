import { configureStore } from "@reduxjs/toolkit";
import networkReducer from '../feature/network/networkSlice'
import locationReducer from '../feature/location/locationSlice'
import microphoneReducer from '../feature/media/microphone/microphoneSlice'
import cameraReducer from '../feature/media/camera/cameraSlice'


export const store = configureStore({
    reducer: {
        network: networkReducer,
        location: locationReducer,
        microphone: microphoneReducer,
        camera: cameraReducer,
    }
})

