import React from "react";
import Webcam from "react-webcam";
import { Box, Container } from "@mui/material";

const VideoCameraComponent = () => {
    return (
        <Container>
            <Box component="section" sx={{px: 2, display: 'flex', padding: 2}}>
                <Webcam />
            </Box>
        </Container>
    )
}

export default VideoCameraComponent;