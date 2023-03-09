import React from 'react';
import {Box,Container,Button} from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import './Download.css'

export default function Download() {
  return (
    <div className='download-container'>
        <Box className='box1'></Box>
        <Box className='data'>
            <Box className='download-title'>Download Now !</Box>
            <Box className='download-desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</Box>
            <Box className="download-buttons">
              <Button id='app-buttons' variant="contained" disableElevation startIcon={<AndroidIcon/>}>Play Store</Button>
              <Button id='app-buttons' variant="contained" disableElevation startIcon={<AndroidIcon/>}> Apple Store </Button>
            </Box>
        </Box>
        <Box className='box2'></Box>
    </div>
  )
}
