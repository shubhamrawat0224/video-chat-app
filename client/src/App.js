import React from 'react'
import { Typography, AppBar } from '@mui/material';

import VideoPlayer from './components/VideoPlayer';
import Notification from './components/Notification';
import Options from './components/Options';
import './App.css';


const App = () => {
  return (
    <div className='wrapper'>
        <AppBar className='appBar' position='static' color='inherit'>
            <Typography variant='h2' align='center'>Silent Call</Typography>
        </AppBar>
        <VideoPlayer/>
        <Options>
            <Notification/>
        </Options>
    </div>
  
  );
}

export default App;