import { createSlice } from "@reduxjs/toolkit";

import {
    MICROPHONE_LOADING,
    MICROPHONE_AVAILABLE,
    MICROPHONE_ERROR,
    MICROPHONE_CONNECTED,
    MICROPHONE_DISCONNECTED
} from '../../../constants'

const initialState = {
    microphoneStatus : MICROPHONE_LOADING    
}

export const microphoneSlice = createSlice({
    name: 'microphone',
    initialState,
    reducers: {
        micAvailable: (state) => {
            state.microphoneStatus = MICROPHONE_AVAILABLE
        },
        micError: (state) => {
            state.microphoneStatus = MICROPHONE_ERROR
        },
        micConnected: (state) => {
            state.microphoneStatus = MICROPHONE_CONNECTED
        },
        micDisconnected: (state) => {
            state.microphoneStatus = MICROPHONE_DISCONNECTED
        }        
    }
})

export const {
    micAvailable, 
    micError, 
    micConnected, 
    micDisconnected,    
} = microphoneSlice.actions

export default microphoneSlice.reducer
