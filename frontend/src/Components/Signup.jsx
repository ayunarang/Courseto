import React, { useState } from 'react';
import { Box, Button, Container, Paper, TextField, Typography, IconButton, InputAdornment, Modal } from '@mui/material'
import { Google as GoogleIcon, Facebook as FacebookIcon, Apple as AppleIcon, RemoveRedEye, VisibilityOff } from '@mui/icons-material';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Signup = () => {
    const [Visibility, setVisibility] = useState(false);
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmpassword: '',
        otp: ''
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
        sendFormData(formData)
    };



    const sendFormData = async (formData) => {
        try {
            const sendEmailForOtp = await axios.post(`http://localhost:${process.env.REACT_APP_API_URL}/api/sendotp`,
                { email: formData.email, fullName: formData.fullname });
            console.log(sendEmailForOtp.data);
            toggleOverlay(true);

        } catch (error) {
            console.log({ error: error.message });
        }
    };

    const verifyOTP = async () => {

        try {
            const verification = await axios.post(`http://localhost:${process.env.REACT_APP_API_URL}/api/verifyotp`,
                { enteredOTP: formData.otp, email: formData.email })
            console.log(verification.data);
            console.log('verification successful!');

        } catch (error) {
            console.log(error);
            console.log('Error in verification!');
        }

        console.log("otp verified")
        console.log(formData)
        axios.post(`http://localhost:${process.env.REACT_APP_API_URL}/api/signup-user`, formData, {
            withCredentials: true
        })
            .then(response => {

                console.log(response.data);
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
                setFormData({ ...formData, otp: '' });
            });

    }


    const [showOverlay, toggleOverlay] = useState(false);

    const handleOtpSubmit = () => {
        verifyOTP();
        toggleOverlay(false);
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
                    <Typography sx={{ marginBottom: '1rem', fontWeight: "800", textAlign: 'center', fontSize: '2rem' }}>
                        Sign up and start learning
                    </Typography>
                    <form>
                        <TextField
                            fullWidth
                            label="Full Name"
                            variant='outlined'
                            alignItems="center"
                            name="fullname"
                            value={formData.fullname}
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
                                    transform: (!formData.fullname) ? 'translate(0, -50%)' : 'translate(0rem, -1.8rem) scale(0.8)', alignSelf: 'center',
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
                            label="Email"
                            type="email"
                            variant="outlined"
                            name="email"
                            value={formData.email}
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
                                shrink: formData.password ? true : undefined,
                                sx: {
                                    top: '50%',
                                    transform: (!formData.password) ? 'translate(0, -50%)' : 'translate(0rem, -1.8rem) scale(0.8)',
                                    alignSelf: 'center',
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
                            label="Confirm Password"
                            type={(Visibility) ? 'text' : 'password'}
                            variant="outlined"
                            name="confirmpassword"
                            value={formData.confirmpassword}
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
                                shrink: formData.confirmpassword ? true : undefined,
                                sx: {
                                    top: '50%',
                                    transform: (!formData.confirmpassword) ? 'translate(0, -50%)' : 'translate(0rem, -1.8rem) scale(0.8)',
                                    alignSelf: 'center',
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
                        Sign up
                    </Button>

                    <Typography sx={{ fontWeight: "400", fontSize: '0.8rem', margin: '1rem 0' }}>
                        By signing up, you agree to our <span style={{
                            textDecoration: 'underline',
                            color: '#5023C3',
                            fontWeight: '700',
                        }}>Terms of Use</span> and <span style={{
                            textDecoration: 'underline',
                            color: '#5023C3',
                            fontWeight: '700',
                        }}>Privacy Policy.</span>
                    </Typography>

                    <Button variant="text" sx={{
                        marginTop: '1rem ',
                        backgroundColor: '#F7F9FA',
                        width: '100%',
                        borderRadius: '0',
                        padding: '0.8rem',
                        textTransform: 'none', color: 'black', fontWeight: '500', fontSize: '1.05rem',
                    }}
                        onClick={() => navigate('/login')}
                    >Already have an account? <span
                        style={{
                            textDecoration: 'underline',
                            color: '#5023C3',
                            fontWeight: '700',
                        }}
                    >Log in</span></Button>

                </Paper>

                <Modal
                    open={showOverlay}
                    onClose={() => toggleOverlay(false)}
                    aria-labelledby="otp-modal-title"
                    aria-describedby="otp-modal-description"
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            borderRadius: 0,
                            outline: 'none',
                        }}
                    >
                        <Typography id="otp-modal-title" variant="h6" component="h2"
                        sx={{fontSize:'1.2rem', fontWeight:'700', fontFamily:'Montserrat'}}>
                            Enter OTP sent to your Email
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                mt: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            }}
                        >
                            <TextField
                                type="number"
                                name="otp"
                                label="Enter 6-digit OTP"
                                variant="outlined"
                                value={formData.otp}
                                onChange={handleChange}
                                fullWidth

                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius:'0'
                                    },
                                    '& .MuiInputBase-input': {
                                        fontSize: '1.65rem',
                                    },
                                }}
                            />
                            <Button variant="contained" onClick={handleOtpSubmit}
                            sx={{borderRadius:'0', padding:'0.75rem 0', fontSize:'1.1rem', textTransform:'none', fontWeight:'600', backgroundColor:'#A535F0',
                                '&:hover': {
                                    backgroundColor: '#8710D8',
                                    boxShadow: 'none',
                                  },
                            }}>
                                Proceed
                            </Button>
                        </Box>
                    </Box>
                </Modal>

            </Container>



        </>
    )
}

export default Signup


















