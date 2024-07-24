import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
      <span>
        {isConnected ? 'CONNECTED' : 'DISCONNECTED'}
      </span>
    </div>
  );
}

export default App;
