import React from 'react'
import { Box, Container } from "@mui/material"
import { useNavigate, useSearchParams } from 'react-router-dom'

import { BUTTON_GO_HOME, BUTTON_GOOGLE_AUTH_LOGIN, ROUTE_LANDING_PAGE } from '../../../constants'
import ButtonComponent from '../../../components/buttons/Button'

const LoggedInPage = () => {    
    const navigate = useNavigate();
    const [searchParams, ] = useSearchParams();
    localStorage.setItem('accessToken', searchParams.get('accessToken'))
    localStorage.setItem('refreshToken', searchParams.get('refreshToken'))
    
    function GoToHomePage() {
        return <ButtonComponent title={BUTTON_GO_HOME} onButtonClick={goToHome} />
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
                <ButtonComponent title={BUTTON_GOOGLE_AUTH_LOGIN} />
            </Box>
            <Box component="section" sx={{ px: 2, display: 'flex', padding: 2 }}>
                <GoToHomePage />
            </Box>
        </Container>
    )
}

export default LoggedInPage;
