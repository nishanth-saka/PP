import React from "react";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getMicrophonePermission } from "../../../helpers";
import { micConnected, micAvailable, setMicrophoneSteam, micDisconnected } from "../../../feature/media/microphone/microphoneSlice";
import ButtonComponent from "../../../components/buttons/Button";
import {
    ROUTE_LANDING_PAGE,
    MICROPHONE_CONNECTED,
    BUTTON_GO_HOME,
    BUTTON_AUDIO_PERMISSION,
    BUTTON_AUDIO_REC_START
} from "../../../constants";

const AudioRecordingPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [micStream, setMicStream] = React.useState();

    const { microphoneStatus } = useSelector((state) => state.microphone)

    const getMicPermission = () => {
        getMicrophonePermission()
            .then((stream) => {
                if (stream) {
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
        return <ButtonComponent title={BUTTON_AUDIO_PERMISSION} onButtonClick={getMicPermission} />
    }

    function MicStartMicRecording() {
        return <ButtonComponent title={BUTTON_AUDIO_REC_START} />
    }

    function GoToHomePage() {
        return <ButtonComponent title={BUTTON_GO_HOME} onButtonClick={goToHome} />
    }

    return (
        <Container>
            <Box component="section" sx={{ px: 2, display: 'flex', padding: 2 }}>
                {microphoneStatus !== MICROPHONE_CONNECTED ? <MicStartMicRecording /> : <MicPermissionButton />}
            </Box>
            <Box component="section" sx={{ px: 2, display: 'flex', padding: 2 }}>
                <GoToHomePage />
            </Box>

        </Container>
    )
}

export default AudioRecordingPage;