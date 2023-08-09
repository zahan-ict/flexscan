import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Presets = () => {
  return (
    
      <Card sx={{ minWidth: 275 }}>
        {/* <LinearProgress /> */}
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Presets
          </Typography>
        
          
        </CardContent>
        
      </Card>
    );
   
}

export default Presets