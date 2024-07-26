import React from "react";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ButtonComponent from '../../components/buttons/Button'
import { ROUTE_VIDEO_PAGE, ROUTE_AUDIO_PAGE, BUTTON_AUDIO_REC, BUTTON_VIDEO_REC } from "../../constants";

const LandingPage = () => {
    let navigate = useNavigate();

    const onAudioRecClick = () => {
        navigate(ROUTE_AUDIO_PAGE)
    }

    const onVideoRecClick = () => {
        navigate(ROUTE_VIDEO_PAGE)
    }

    return (
        <Container>
            <Box component="section" sx={{ px: 2, display: 'flex', padding: 2 }}>
                <ButtonComponent title={BUTTON_AUDIO_REC} onButtonClick={onAudioRecClick} />
            </Box>
            <Box component="section" sx={{ px: 2, display: 'flex', padding: 2 }}>
                <ButtonComponent title={BUTTON_VIDEO_REC} onButtonClick={onVideoRecClick} />
            </Box>
        </Container>
    )
}

export default LandingPage;