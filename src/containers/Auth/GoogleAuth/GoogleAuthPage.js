import React from 'react'
import {Box, Container} from "@mui/material"
import { useNavigate } from 'react-router-dom'

import ButtonComponent from '../../../components/buttons/Button'
import { 
    BUTTON_GOOGLE_AUTH_LOGIN,
    BUTTON_GO_HOME,
    ROUTE_LANDING_PAGE
 } from '../../../constants'

const GoogleAuthConsentPage = () => {
    const navigate = useNavigate();

    const onAuthClick = () => {
        navigate(ROUTE_LANDING_PAGE)
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
