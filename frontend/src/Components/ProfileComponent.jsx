import { Avatar, Container, Typography, Box } from '@mui/material'
import React from 'react'
import { useHref, useNavigate } from 'react-router-dom'

const ProfileComponent = ({ userData }) => {
    const navigate = useNavigate();
    return (
        <Box maxWidth={false} sx={{ display: 'flex', flexDirection: 'row', padding: 0, margin: 0 }}  
        >
            <Avatar
                sx={{
                    width: "2.3rem",
                    height: "2.3rem",
                    // backgroundColor: 'black', 
                    marginRight: '0.8rem',
                    cursor: 'pointer',
                }}
            >
                <Box
                    component="img"
                    src={userData.image}
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                    }}
                />
            </Avatar>
            <Box sx={{
                cursor: 'pointer'
            }}>
                <Typography sx={{
                    fontSize: '0.9rem', fontWeight: '600',
                    // '.&:hover': {
                    //     color: '#5023C3',
                    // },
                }}
                >{userData.fullName}
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', fontWeight: '400' }}>{userData.email}</Typography>
            </Box>
        </Box>
    )
}

export default ProfileComponent
