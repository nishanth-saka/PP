import React from "react";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ButtonComponent from '../../components/buttons/Button'
import { 
    ROUTE_VIDEO_PAGE, 
    ROUTE_AUDIO_PAGE, 
    ROUTE_GOOGLE_AUTH_PAGE, 
    BUTTON_AUDIO_REC, 
    BUTTON_VIDEO_REC,
    BUTTON_GOOGLE_AUTH_LOGIN
} from "../../constants";

const LandingPage = () => {
    let navigate = useNavigate();

    const onAuthClick = () => {
        navigate(ROUTE_GOOGLE_AUTH_PAGE)
    }

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
            <Box component="section" sx={{ px: 2, display: 'flex', padding: 2 }}>
                <ButtonComponent title={BUTTON_GOOGLE_AUTH_LOGIN} onButtonClick={onAuthClick} />
            </Box>
        </Container>
    )
}

export default LandingPage;