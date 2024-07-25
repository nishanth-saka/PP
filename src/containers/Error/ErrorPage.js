import { Box, Container } from "@mui/material";
import React from "react";

import ButtonComponent from '../../components/buttons/Button'
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    let navigate = useNavigate();
    const goToHome = () => {        
        navigate("/")
    }

    return (
        <Container>
        <Box component="section" sx={{px: 2, display: 'flex', padding: 2}}>
            <span>ERROR!</span>            
        </Box>
        <Box component="section" sx={{px: 2, display: 'flex', padding: 2}}>            
            <ButtonComponent title="HOME" onButtonClick={goToHome} />
        </Box>
        </Container>
    )
}

export default ErrorPage;