import React from 'react';
import mobile1 from '../../images/mobile-1.svg';
import {Container,Button} from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import './MusicApp.css';
export default function MusicApp() {
  return (
    <Container id='home'>
    <div className='musci-app'>
      <div className='mobile'>
        <div>
            <img className='mobile-phone' src={mobile1} alt="mobile"/>
        </div>
      </div>
      <div className='app-data'>
        <div className='music'>Evelynn Music</div>
        <div className='app-popularity '>Best Music App 2022</div>
        <div className='app-description'>Lorem ipsum dolor sit amet, consetrtur sadipsling eltir, sed diam nounmy eirmod tempor invidont ut labore et dolore magna</div>
        <Button className='app-link' variant="outlined">Click to watch a video</Button>
        <div className="buttons">
            <Button id='app-buttons' variant="contained" disableElevation startIcon={<AndroidIcon/>}>Play Store</Button>
            <Button id='app-buttons' variant="contained" disableElevation startIcon={<AndroidIcon/>}> Apple Store </Button>
        </div>
      </div>
    </div>
    </Container>
  )
}
