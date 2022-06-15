import React, { useState, useContext } from 'react';
import {Button, TextField,Grid,Typography,Container,Paper} from '@mui/material'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Assignment, Phone, PhoneDisabled } from '@mui/icons-material'
import './Options.css';
import { SocketContext } from '../SocketContext';

const Options = ({children}) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
    <Container className='container'>
      <Paper elevation={10} className='paper'>
        <form className='root' noValidate autoComplete="off">
          <Grid container className='gridContainer'>
            <Grid item xs={12} md={6} className='padding'>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} className='margin'>
                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className='padding'>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className='margin'>
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className='margin'>
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  )
}

export default Options;