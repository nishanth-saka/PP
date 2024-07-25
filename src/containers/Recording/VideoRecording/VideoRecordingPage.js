import React from "react";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getMicrophonePermission } from "../../../helpers";
import { micConnected, micAvailable, setMicrophoneSteam, micDisconnected } from "../../../feature/media/microphone/microphoneSlice";
import ButtonComponent from "../../../components/buttons/Button";
import { ROUTE_LANDING_PAGE, MICROPHONE_CONNECTED, MICROPHONE_LOADING } from "../../../constants";

const VideoRecordingPage = () => {  
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [micStream, setMicStream] = React.useState();
    // const mic_status = useSelector((state) => state);    

    const {microphoneStatus} = useSelector((state) => state.microphone)     

    const getMicPermission = () => {
        getMicrophonePermission()
        .then((stream) => {
            if(stream){
                dispatch(micAvailable())
                setMicStream(stream);
                dispatch(micConnected())
            } else {
                dispatch(micDisconnected())
            }
        })    
    }

    const goToHome = () => {
        navigate(ROUTE_LANDING_PAGE)
    }
    
    function MicPermissionButton() {
        return <ButtonComponent title="GET MIC PERMISSION" onButtonClick={getMicPermission} />
    }

    function MicStartMicRecording() {
        return <ButtonComponent title="START RECORDING" />
    }

    function GoToHomePage() {
        return <ButtonComponent title="HOME" onButtonClick={goToHome} />
    }

    return (
        <Container>
            <Box component="section" sx={{px: 2, display: 'flex', padding: 2}}>
                {microphoneStatus !== MICROPHONE_CONNECTED ? <MicStartMicRecording /> : <MicPermissionButton />}
            </Box>
            <Box component="section" sx={{px: 2, display: 'flex', padding: 2}}>
                <GoToHomePage />
            </Box>
            
        </Container>
    )
}

export default VideoRecordingPage;