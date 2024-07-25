import React from "react";
import { Box } from "@mui/material";
import { useReactMediaRecorder } from "react-media-recorder-2";

const VideoRecordingPage = () => {
    const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

    return (
        <Box>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <video src={mediaBlobUrl} controls autoPlay loop />
        </Box>
    )
}

export default VideoRecordingPage;