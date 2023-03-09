import React from 'react';
import {Box,Container,Button} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './FooterCard.css'

export default function FooterCard({title}) {
  return (
    <Box className='footer-card'>
        <Box className='card-title'>{title}</Box>
        <Button className='footer-button' startIcon={<KeyboardArrowRightIcon/>}>About Us</Button>
        <Button className='footer-button' startIcon={<KeyboardArrowRightIcon/>}>Team</Button>
        <Button className='footer-button' startIcon={<KeyboardArrowRightIcon/>}>Pricing</Button>
        <Button className='footer-button' startIcon={<KeyboardArrowRightIcon/>}>Boosting</Button>
        <Button className='footer-button' startIcon={<KeyboardArrowRightIcon/>}>Project</Button>
    </Box>
  )
}
