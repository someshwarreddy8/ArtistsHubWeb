import { Box, TextField, Button, ThemeProvider, createTheme, InputAdornment, IconButton } from '@mui/material'
import React, { useState } from 'react';
import './CSS/Signup.css'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {

    const theme = createTheme({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white', // Border color on focus
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'gray', // Default border color
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white', // Border color on hover
                        },
                        '& input': {
                            color: 'white', // Text color
                        },
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        '&.Mui-focused': {
                            color: 'white', // Label color on focus
                        },
                        '&.MuiInputLabel-shrink': {
                            color: 'white',
                        }
                    },
                },
            },
        },
    });

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };

    const { register, handleSubmit, formState: { errors } } = useForm({

    });
    const submit = async (formData) => {
        const { data } = await axios.post('http://174.129.59.128:8088/admin/addAdmin', formData);
        console.log(data);
    }
    return (
        <ThemeProvider theme={theme}>
            <Box component='main' sx={{ backgroundImage: `url(Images/MainHome.jpg)`, backgroundSize: 'cover', height: '100vh' }}>
                <Box className='formContainer' component='form' onSubmit={handleSubmit(submit)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px' }}>
                    {/* username */}
                    <TextField size='small' fullWidth variant='outlined' color='secondary' sx={{ my: 1 }} label='username'
                        {...register('userName', {})} />

                    {/* password  */}
                    <TextField size='small' fullWidth variant='outlined' sx={{ my: 1 }} label='password'
                        {...register('password', {})}
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}>
                                        {showPassword ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* confirm password */}
                    <TextField size='small' fullWidth variant='outlined' sx={{ my: 1 }} label='confirmPassword'
                        {...register('confirmPassword', {})}
                        type={showConfirmPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownConfirmPassword}>
                                        {showConfirmPassword ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }} />

                    {/* email */}
                    <TextField size='small' fullWidth variant='outlined' sx={{ my: 1 }} label='email'
                        {...register('email', {})} />

                    {/* mobile */}
                    <TextField size='small' fullWidth variant='outlined' sx={{ my: 1 }} label='mobile'
                        {...register('mobile', {})} />

                    {/* SignUp button */}
                    <Box sx={{display:'flex', justifyContent:'space-evenly', width: '100%'}}>
                        <Button variant='contained' type='submit'>Sign up</Button>
                        <Button component={Link} to='/adminHome' variant='contained' color='warning'>Cancel</Button>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Signup;
