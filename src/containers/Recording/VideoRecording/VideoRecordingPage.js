import React from "react";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRecordWebcam } from 'react-record-webcam'

import { getCameraPermission } from "../../../helpers";
import {
    camConnected,
    camAvailable,
    camDisconnected,
    camRecStarted,
    camRecStopped,
    camRecCompleted
} from "../../../feature/media/camera/cameraSlice";
import ButtonComponent from "../../../components/buttons/Button";
import {
    ROUTE_LANDING_PAGE,
    BUTTON_GO_HOME,
    BUTTON_VIDEO_REC_START,
    BUTTON_VIDEO_REC_STOP,
    BUTTON_VIDEO_PERMISSION,
    CAMERA_LOADING,
    CAMERA_DISCONNECTED,
    CAMERA_RECORDING_STARTED,
    CAMERA_RECORDING_DURATION_MS,
    BUTTON_VIDEO_UPLOAD
} from "../../../constants";
import VideoCameraComponent from "../../../components/camera/VideoCamera";

const VideoRecordingPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { createRecording, openCamera, closeCamera, startRecording, stopRecording } = useRecordWebcam()
    const [ streamRecorded, setCamStream] = React.useState();

    const { cameraStatus } = useSelector((state) => state.camera)

    const getCamPermission = () => {
        getCameraPermission()
            .then((stream) => {
                if (stream) {
                    dispatch(camAvailable())                    
                    dispatch(camConnected())
                } else {
                    dispatch(camDisconnected())
                }
            })
    }

    const setCameraRecStarted = async () => {
        dispatch(camRecStarted())

        const recording = await createRecording()

        await openCamera(recording.id)
        await startRecording(recording.id)
        await new Promise((resolve) => setTimeout(resolve, CAMERA_RECORDING_DURATION_MS))
        const recorded = await stopRecording(recording.id)
        await closeCamera(recording.id)   
        setCamStream(recorded);
        //COMPLETED
        setCameraRecStopped();
        setCameraRecCompleted();
    }

    const setCameraRecStopped = () => {
        dispatch(camRecStopped())
    }

    const setCameraRecCompleted = () => {
        dispatch(camRecCompleted())
    }

    const goToHome = () => {
        navigate(ROUTE_LANDING_PAGE)
    }

    function CamPermissionButton() {
        return <ButtonComponent title={BUTTON_VIDEO_PERMISSION} onButtonClick={getCamPermission} />
    }

    function CamStartRecording() {
        return <ButtonComponent title={BUTTON_VIDEO_REC_START} onButtonClick={setCameraRecStarted} />
    }

    function CamStopRecording() {
        return <ButtonComponent title={BUTTON_VIDEO_REC_STOP} onButtonClick={setCameraRecStopped} />
    }

    function UploadVideoFunc() {
        return <ButtonComponent title={BUTTON_VIDEO_UPLOAD} onButtonClick={uploadVideo} />
    }

    function GoToHomePage() {
        return <ButtonComponent title={BUTTON_GO_HOME} onButtonClick={goToHome} />
    }

    const uploadVideo = async () => {
        const formData = new FormData();
        formData.append('file', streamRecorded.blob, 'recorded.webm');
        formData.append('title', 'TITLE')
        formData.append('description', 'DESCRIPTION')

        const response = await fetch('http://localhost:1449/upload/youtube-channel', {
            method: 'POST',
            body: formData,
        });

        console.warn(formData)
        console.warn(response);
    }

    return (
        <Container>
            <Box component="section" sx={{ px: 2, display: 'flex', padding: 2 }}>
                {cameraStatus === (CAMERA_LOADING || CAMERA_DISCONNECTED) ? <CamPermissionButton /> :
                    cameraStatus === CAMERA_RECORDING_STARTED ? <CamStopRecording /> : <CamStartRecording />}
            </Box>
            <Box component="section" sx={{ px: 2, display: 'flex', padding: 2 }}>
                {cameraStatus === CAMERA_RECORDING_STARTED ? <VideoCameraComponent enabled={true} /> : <VideoCameraComponent enabled={false} />}
            </Box>
            <Box component="section" sx={{ px: 2, display: 'flex', padding: 2 }}>
                <UploadVideoFunc />
            </Box>
            <Box component="section" sx={{ px: 2, display: 'flex', padding: 2 }}>
                <GoToHomePage />
            </Box>

        </Container>
    )
}

export default VideoRecordingPage;