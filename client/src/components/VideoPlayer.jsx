import React, { useContext } from 'react'
import { Grid, Typography, Paper } from '@mui/material';

import { SocketContext } from '../SocketContext.js';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <Grid container style={{ display: 'flex', justifyContent: 'center' }} className='gridContainer' >
      {stream && (
        <Paper className='paper'>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay style={{ width: '550px', justifyContent: 'center' }} className='video'/>
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className='paper'>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className='video' />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;

