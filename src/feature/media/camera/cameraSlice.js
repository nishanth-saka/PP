import { createSlice } from "@reduxjs/toolkit";

import {
    CAMERA_LOADING,
    CAMERA_AVAILABLE,
    CAMERA_ERROR,
    CAMERA_CONNECTED,
    CAMERA_DISCONNECTED,
    CAMERA_RECORDING_STARTED,
    CAMERA_RECORDING_STOPPED
} from '../../../constants'

const initialState = {
    cameraStatus: CAMERA_LOADING
}

export const cameraSlice = createSlice({
    name: 'camera',
    initialState,
    reducers: {
        camAvailable: (state) => {
            state.cameraStatus = CAMERA_AVAILABLE
        },
        camError: (state) => {
            state.cameraStatus = CAMERA_ERROR
        },
        camConnected: (state) => {
            state.cameraStatus = CAMERA_CONNECTED
        },
        camDisconnected: (state) => {
            state.cameraStatus = CAMERA_DISCONNECTED
        },
        camRecStarted: (state) => {
            state.cameraStatus = CAMERA_RECORDING_STARTED
        },
        camRecStopped: (state) => {
            state.cameraStatus = CAMERA_RECORDING_STOPPED
        }
    }
})

export const {
    camAvailable,
    camError,
    camConnected,
    camDisconnected,
    camRecStarted,
    camRecStopped,
} = cameraSlice.actions

export default cameraSlice.reducer
