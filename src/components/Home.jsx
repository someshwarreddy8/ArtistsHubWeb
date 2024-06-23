import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Box component="main" sx={{ backgroundImage:`url(images/MainHome.jpg)`, backgroundSize:'cover', height: '100vh', display: 'flex', alignItems: 'center'}}>
            <Button component={Link} to='/adminHome' variant='contained' sx={{ mx: 2 }}> Admin </Button>
            <Button component={Link} to='/userHome' variant='contained' color='warning'> User </Button>
        </Box>
    )
}

export default Home