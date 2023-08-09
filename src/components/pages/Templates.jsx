import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Templates = () => {
  return (
    
      <Card sx={{ minWidth: 275 }}>
        {/* <LinearProgress /> */}
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Template List
          </Typography>
        
          
        </CardContent>
        
      </Card>
    );
   
}

export default Templates