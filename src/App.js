import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

import './App.css';
import { useNavigatorOnline } from './hooks/getOnLineStatus';
import { connected, disconnected } from './feature/network/networkSlice';

function App() {
  const isOnline = useNavigatorOnline();
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.network.networkStatus);

  React.useEffect(() => {
    isOnline ? dispatch(connected()) : dispatch(disconnected());    
  }, [isOnline])

  return (
    <div className="App">
      <Box component={"section"} sx={{px: 2, bgcolor: isConnected ? 'wheat' : 'red', display: 'flex', padding: 2}}>
        <span>{isConnected ? 'ONLINE' : 'OFFLINE'}</span>
      </Box>
    </div>
  );
}

export default App;
