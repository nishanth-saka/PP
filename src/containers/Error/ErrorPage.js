import React from "react";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ROUTE_LANDING_PAGE } from "../../constants";
import ButtonComponent from '../../components/buttons/Button'


const ErrorPage = () => {
    let navigate = useNavigate();
    const goToHome = () => {        
        navigate(ROUTE_LANDING_PAGE)
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