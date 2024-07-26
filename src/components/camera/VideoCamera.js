import React from "react"
import { Container, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useRecordWebcam } from 'react-record-webcam'

import { CAMERA_RECORDING_COMPLETED, CAMERA_RECORDING_STARTED } from "../../constants";


const VideoCameraComponent = (props) => {
    const { enabled } = props;
    const { cameraStatus } = useSelector((state) => state.camera)
    const { activeRecordings } = useRecordWebcam()

    const videoContainerStyle = {
        background: 'aliceblue',
        width: '100%',     
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        enabled: enabled
    }

    return (
        <Container sx={videoContainerStyle}>
            {activeRecordings.map(recording => (
                <Box sx={{display: 'flex'}} key={recording.id}>
                    <video style={{display: cameraStatus === CAMERA_RECORDING_STARTED ? 'flex' : 'none'}} ref={recording.webcamRef} autoPlay />
                    <video style={{display: cameraStatus === CAMERA_RECORDING_COMPLETED ? 'flex' : 'none'}} ref={recording.previewRef} loop autoPlay />                    
                </Box>
            ))}
        </Container>
    )
}

export default VideoCameraComponent;