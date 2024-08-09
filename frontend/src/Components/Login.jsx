import React, { useState } from 'react';
import { Box, Button, Container, Paper, TextField, Typography, IconButton, InputAdornment } from '@mui/material'
import { Google as GoogleIcon, Facebook as FacebookIcon, Apple as AppleIcon, RemoveRedEye, VisibilityOff } from '@mui/icons-material';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [Visibility, setVisibility] = useState(false);
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        submitData();

    };


    const submitData = () => {

        axios.post(`http://localhost:${process.env.REACT_APP_API_URL}/api/login-user`, formData,
            {
                withCredentials: true
            })
            .then(response => {
                console.log(response);
                console.log('Login successful');
                navigate('/');
            })
            .catch(error => {
                console.log('Login failed');
                console.log(error.message);
            });
    };


    return (

        <>
            <Navbar />

            <Container component={'main'} maxWidth={false} sx={{ justifyContent: "center", alignItems: "flex-start", display: "flex", height: "auto", padding: '2rem 0rem 3rem 0rem', width: '100%', margin: 0 }}>
                {/* Image container */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '0', 
                    width: '100%' }}>
                    <img src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x2.webp" alt="description" style={{ width: '100%', height: 'auto' }} />
                </Box>

                {/* Paper container containing right sidepart*/}
                <Paper
                    elevation={0}
                    sx={{
                        padding: '5rem 6.5rem',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: '100%',
                        width: '65%',
                    }}
                >
                    <Typography sx={{ marginBottom: "0.5rem", fontWeight: "800", textAlign: 'center', fontSize: '2rem' }}>
                        Log in to your Udemy account
                    </Typography>
                    <form>
                        <TextField
                            fullWidth
                            label="Email"
                            variant='outlined'
                            alignItems="center"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            sx={{
                                margin: '0.5rem 0',

                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '0px',
                                    '& fieldset': {
                                        borderColor: 'black',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    backgroundColor: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '100%',
                                    fontSize: '1.15rem'
                                },
                            }}
                            inputProps={{
                                style: {
                                    padding: '1.3rem 1rem ',
                                    marginTop: '0.5rem'
                                },
                            }}
                            InputLabelProps={{
                                sx: {
                                    top: '50%',
                                    transform: (!formData.email) ? 'translate(0, -50%)' : 'translate(0rem, -1.8rem) scale(0.8)', alignSelf: 'center',
                                    justifySelf: 'center',
                                    fontWeight: '700',
                                    color: 'black',
                                    padding: '0 1rem',
                                    '&.Mui-focused': {
                                        transform: 'translate(0rem, -1.8rem) scale(0.8)',
                                        color: 'black',
                                    },
                                },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type={(Visibility) ? 'text' : 'password'}
                            variant="outlined"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            sx={{
                                margin: '0.2rem 0',

                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '0px',
                                    '& fieldset': {
                                        borderColor: 'black',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    backgroundColor: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '100%',
                                    fontSize: '1.15rem'
                                },
                            }}
                            InputProps={{
                                style: {
                                    padding: '0.5rem 0rem ',
                                    marginTop: '0.5rem'
                                },
                                endAdornment: (
                                    <InputAdornment position="end"
                                        sx={{ padding: '0', marginRight: '0.5rem' }}>
                                        <IconButton edge="end" onClick={() => setVisibility(!Visibility)} sx={{ color: 'black', margin: '0' }}>
                                            {Visibility ? <RemoveRedEye /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{
                                sx: {
                                    top: '50%',
                                    transform: (!formData.password) ? 'translate(0, -50%)' : 'translate(0rem, -1.8rem) scale(0.8)', alignSelf: 'center',
                                    justifySelf: 'center',
                                    fontWeight: '700',
                                    color: 'black',
                                    padding: '0 1rem',
                                    '&.Mui-focused': {
                                        transform: 'translate(0rem, -1.8rem) scale(0.8)',
                                        color: 'black',
                                    },
                                },
                            }}
                        />

                    </form>
                    <Button type='submit' variant="contained" sx={{
                        marginTop: '1rem', backgroundColor: '#A535F0', width: '100%', padding: '0.75rem',
                        fontWeight: '600', boxShadow: 'none',
                        fontSize: '1.1rem',
                        textTransform: 'none',
                        borderRadius: '0',
                        '&:hover': {
                            backgroundColor: '#8710D8',
                            boxShadow: 'none',
                        },
                    }}
                        onClick={handleSubmit}>
                        Log in
                    </Button>
                    <Button variant="text" sx={{
                        marginTop: '1rem', textTransform: 'none', color: '#5023C3', fontWeight: '700', fontSize: '1.05rem',
                        textDecoration: 'underline'
                    }}
                    >Forgot Password</Button>
                    <Typography sx={{ fontWeight: "400", fontSize: '1rem' }}>
                        Other log in options
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '50%', padding: '2rem', marginBottom: '2rem' }}>
                        <GoogleIcon sx={{ border: '1px solid black', padding: '1rem' }} />
                        <FacebookIcon sx={{ border: '1px solid black', padding: '1rem' }} />
                        <AppleIcon sx={{ border: '1px solid black', padding: '1rem' }} />
                    </Box>
                    <Button variant="text" sx={{
                        marginTop: '1rem ',
                        backgroundColor: '#F7F9FA',
                        width: '100%',
                        borderRadius: '0',
                        padding: '0.8rem',
                        textTransform: 'none', color: 'black', fontWeight: '500', fontSize: '1.05rem',
                    }}
                        onClick={() => navigate('/signup')}>
                        Don't have an account? <span
                            style={{
                                textDecoration: 'underline',
                                color: '#5023C3',
                                fontWeight: '700',
                            }}
                        >Sign Up</span></Button>
                    <Button variant="text" sx={{
                        borderRadius: '0',
                        backgroundColor: '#F7F9FA',
                        borderTop: '1px solid #CFCFCF',
                        textTransform: 'none', color: '#5023C3', fontWeight: '700', fontSize: '1.05rem',
                        textDecoration: 'underline',
                        padding: '0.8rem',
                        width: '100%'
                    }}
                    >Log in with your orgnisation</Button>


                </Paper>
            </Container>



        </>
    )
}

export default Login
