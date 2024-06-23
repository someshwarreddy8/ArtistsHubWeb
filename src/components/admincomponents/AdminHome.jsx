import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <Box component="main" sx={{
      backgroundImage: `url(images/MainHome.jpg)`, backgroundSize: 'cover', height: '100vh',
      display: 'flex', alignItems: 'center'
    }}>
      <Box sx={{width:'400px', display:'flex', justifyContent:'space-evenly'}}>
        <Button component={Link} to='/adminSignup' variant='contained'>Sign up</Button>
        <Button component={Link} to='' variant='contained' color='success'>Sign in</Button>
        <Button component={Link} to='/' variant='contained' color='warning'>Cancel</Button>
      </Box> 
    </Box>
  )
}

export default AdminHome