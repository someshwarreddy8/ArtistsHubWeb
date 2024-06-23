import { TextField, Button, Typography, Box, ThemeProvider, createTheme, InputProps, InputAdornment, IconButton } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/Signup.css'
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Signin = () => {
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
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const [cookies, setCookies, removeCookies] = useCookies(['userDetails']);

    const [invalidCreds, setInvalidCreds] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const submit = async (formData) => {
        const { data } = await axios.get('http://localhost:8088/admin/getAdminList');
        if (data) {
            const admin = data?.find(data => (data.userName === formData.userName && data.password === formData.password));

            if (admin) {
                navigate('/adminDashboard')
                setCookies('userDetails', admin.userName);
                if (invalidCreds) {
                    setInvalidCreds(prev => !prev);
                }
            } else {
                if (!invalidCreds) {
                    setInvalidCreds(prev => !prev);
                }
                navigate('/adminSignin');
            }
        } else {
            if (!invalidCreds) {
                setInvalidCreds(prev => !prev);
            }
            navigate('/adminSignin');
        }
    }

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev)
    }
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    }
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ backgroundImage: 'url(Images/MainHome.jpg)', backgroundSize: 'cover', height: '100vh' }}>
                <Box className='signInFormContainer' component='form' onSubmit={handleSubmit(submit)} sx={{ width: '300px', height: '200px' }}>
                    <Typography sx={{ display: 'flex', justifyContent: 'center' }}>{invalidCreds && <Button variant='contained' size='small'>Oops...Invalid Credentials!!! </Button>}</Typography>

                    <TextField sx={{ my: 1 }} fullWidth size='small' variant='outlined' label='username' {...register('userName', {})} />

                    <TextField sx={{ my: 1 }} fullWidth size='small' variant='outlined' label='password' {...register('password', {})}
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

                    <Box sx={{ my: 1, display: 'flex', justifyContent: 'space-evenly' }}>
                        <Button size='small' variant='contained' type='submit'>Sign in</Button>
                        <Button component={Link} to='/adminHome' size='small' variant='contained' color='warning'>Cancel</Button>
                    </Box>
                </Box>
            </Box >
        </ThemeProvider>
    )
}

export default Signin