import React from "react"
import { Container } from "@mui/material";
import { useRecordWebcam } from 'react-record-webcam'


const VideoCameraComponent = (props) => {
    const { enabled } = props;
    const videoCamRef = React.useRef();
    const { activeRecordings } = useRecordWebcam()    


    const videoContainerStyle = {
        background: 'aliceblue',
        width: '100%',
        height: "60vh",
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        enabled: enabled
    }


    return (
        <Container sx={videoContainerStyle}>
            {activeRecordings.map(recording => (
                <div key={recording.id}>
                    <video ref={recording.webcamRef} autoPlay />
                    <video ref={recording.previewRef} autoPlay loop />
                </div>
            ))}
        </Container>
    )
}

export default VideoCameraComponent;