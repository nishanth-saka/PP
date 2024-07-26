import React from "react";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getCameraPermission } from "../../../helpers";
import { camConnected, camAvailable, camDisconnected } from "../../../feature/media/camera/cameraSlice";
import ButtonComponent from "../../../components/buttons/Button";
import { 
    ROUTE_LANDING_PAGE, 
    CAMERA_CONNECTED, 
    BUTTON_GO_HOME,
    BUTTON_VIDEO_REC_START,
    BUTTON_VIDEO_REC_STOP,
    BUTTON_VIDEO_PERMISSION
} from "../../../constants";

const VideoRecordingPage = () => {  
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [camStream, setCamStream] = React.useState();

    const {cameraStatus} = useSelector((state) => state.camera)     

    const getCamPermission = () => {
        getCameraPermission()
        .then((stream) => {
            if(stream){
                dispatch(camAvailable())
                setCamStream(stream);
                dispatch(camConnected())
            } else {
                dispatch(camDisconnected())
            }
        })    
    }

    const goToHome = () => {
        navigate(ROUTE_LANDING_PAGE)
    }
    
    function CamPermissionButton() {
        return <ButtonComponent title={BUTTON_VIDEO_PERMISSION} onButtonClick={getCamPermission} />
    }

    function CamStartRecording() {
        return <ButtonComponent title={BUTTON_VIDEO_REC_START} />
    }

    function CamStopRecording() {
        return <ButtonComponent title={BUTTON_VIDEO_REC_STOP} />
    }

    function GoToHomePage() {
        return <ButtonComponent title={BUTTON_GO_HOME} onButtonClick={goToHome} />
    }

    return (
        <Container>
            <Box component="section" sx={{px: 2, display: 'flex', padding: 2}}>
                {cameraStatus !== CAMERA_CONNECTED ? <CamPermissionButton /> : <CamStartRecording />}
            </Box>
            <Box component="section" sx={{px: 2, display: 'flex', padding: 2}}>
                <GoToHomePage />
            </Box>
            
        </Container>
    )
}

export default VideoRecordingPage;