import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const CreateInstructor = () => {
    return (
        <>
        <Navbar/>
            <Box sx={{ width: '100%', maxWidth: 'auto' }}>
                <Card sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="600"
                        image={'https://s.udemycdn.com/teaching/billboard-desktop-2x-v4.jpg'}
                        alt="Background-image"

                    />
                    <CardContent
                        sx={{
                            position: 'absolute',
                            transform: 'translate(-50%, -50%)',
                            top: '50%',
                            marginLeft: '15rem',
                            backgroundColor: 'transparent',
                            // boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
                            color: 'black',
                            maxWidth: '22rem',
                        }}
                    >
                        <Typography sx={{ fontSize: '3.5rem', fontFamily: "EB Garamond", fontWeight: '700', lineHeight: '3.5rem', color:'#2D2F31', margin: '0.8rem'  }}>
                            Come teach with us
                        </Typography>
                        <Typography sx={{
                            fontSize: '1.25rem', color:'#2D2F31' , margin: '0.8rem' 
                        }}>
                            Become an instructor and change lives — including your own
                        </Typography>
                        <Button 
                        disableRipple
                        sx={{width:'100%', backgroundColor:'#2D2F31', color:'white', textTransform:'none', fontSize:'1.1rem', fontWeight:'600', padding:'0.65rem 0', borderRadius:0,
                            margin: '0.8rem' ,
                            '&:hover': {
                                // color: '#5023C3',
                                // fontWeight: '500',
                                backgroundColor: '#2D2F31',
                                cursor: 'pointer',
                            }
                        }}>Get Started</Button>
                    </CardContent>
                </Card>
            </Box>

<Footer/>
        </>
    )
}

export default CreateInstructor
