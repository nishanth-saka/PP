import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { 
  BrowserRouter as Router,
  Route,
  Routes
 } from 'react-router-dom';
 import CssBaseline from '@mui/material/CssBaseline';

import { useNavigatorOnline } from './hooks/getOnLineStatus';
import { connected, disconnected } from './feature/network/networkSlice';
import { setPosition } from './feature/location/locationSlice';
import { getLocationCoords } from './helpers';

function App() {
  const dispatch = useDispatch();

  const isOnline = useNavigatorOnline();    
  const isConnected = useSelector((state) => state.network.networkStatus);

  const getPosition = (position) => {    
    dispatch(setPosition({position : {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }}));
  }

  React.useEffect(() => {
    isOnline ? dispatch(connected()) : dispatch(disconnected()); 
    
    if(isOnline){
      getLocationCoords(getPosition)
    }
  }, [isOnline])

  return (
    <React.Fragment>    
      <CssBaseline />
      <Box component={"section"} sx={{px: 2, bgcolor: isConnected ? 'wheat' : 'red', display: 'flex', padding: 2}}>
        <span>{isConnected ? 'ONLINE' : 'OFFLINE'}</span>
      </Box>    
    </React.Fragment>
  );
}

export default App;
