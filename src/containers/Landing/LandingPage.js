import React from "react";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ButtonComponent from '../../components/buttons/Button'
import { ROUTE_VIDEO_PAGE } from "../../constants";

const LandingPage = () => {
    let navigate = useNavigate();

    const onVideoRecClick = () => {
        navigate(ROUTE_VIDEO_PAGE)
    }

    return (
        <Container>
        <Box component="section" sx={{px: 2, display: 'flex', padding: 2}}>
            <span>LANDING</span>            
        </Box>
        <Box component="section" sx={{px: 2, display: 'flex', padding: 2}}>            
            <ButtonComponent title="REC" onButtonClick={onVideoRecClick} />
        </Box>        
        </Container>
    )
}

export default LandingPage;