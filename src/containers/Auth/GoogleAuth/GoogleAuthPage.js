import React from 'react'
import { Box, Container } from "@mui/material"
import { useNavigate } from 'react-router-dom'

import ButtonComponent from '../../../components/buttons/Button'
import {
    BUTTON_GOOGLE_AUTH_LOGIN,
    BUTTON_GO_HOME,
    ROUTE_LANDING_PAGE
} from '../../../constants'
import { useGetLoginLinkQuery } from '../../../api/auth/google/userApi'

const GoogleAuthConsentPage = () => {
    const navigate = useNavigate();    
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetLoginLinkQuery();

    const redirectToLoginURL = (loginURL) => {
        console.warn(`redirectToLoginURL:`, loginURL);
        window.location.href = loginURL;
    }

    const onAuthClick = () => {
        console.warn(error);
        if(error){
            redirectToLoginURL(error?.data)
        }
    }

    const goToHome = () => {
        navigate(ROUTE_LANDING_PAGE)
    }

    function GoToHomePage() {
        return <ButtonComponent title={BUTTON_GO_HOME} onButtonClick={goToHome} />
    }

    return (
        <Container>
            <Box component="section" sx={{ px: 2, display: 'flex', padding: 2 }}>
                <ButtonComponent title={BUTTON_GOOGLE_AUTH_LOGIN} onButtonClick={onAuthClick} />
            </Box>
            <Box component="section" sx={{ px: 2, display: 'flex', padding: 2 }}>
                <GoToHomePage />
            </Box>
        </Container>
    )
}

export default GoogleAuthConsentPage;
