import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, TextField, Button, Box, Avatar } from '@mui/material';
import { Search as SearchIcon, ShoppingCartOutlined, FavoriteBorderOutlined, NotificationsNoneOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import HoverMenu from './HoverMenu';
import ProfileComponent from './ProfileComponent';

const Navbar = ({ userData }) => {
    const navigate = useNavigate()
    const [searchTerm, setsearchTerm] = useState('');


    return (
        <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000', width: '100%', padding: '0.6rem 0.5rem', zIndex: '99' }}>
            <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="brand" style={{ width: '6rem', height: 'auto', cursor: 'pointer' }} onClick={() => { navigate('/') }} />

                <HoverMenu trigger={
                    <Typography variant="body1" sx={{ color: 'black', margin: '0 1.2rem', cursor: 'pointer', backgroundColor: 'transparent' }}>
                        Categories</Typography>
                }
                    menuItems={['Category1', 'Category 2', 'Category 3']}
                />

                <TextField
                    variant="outlined"
                    type='text'
                    name="searchTerm"
                    value={searchTerm}
                    onChange={(e) => setsearchTerm(e.target.value)}
                    placeholder="Search for anything"
                    sx={{
                        backgroundColor: '#F7F9FA',
                        borderRadius: '80px',
                        borderColor: 'black',
                        flex: 1,
                        margin: '0 1rem',

                        '& .MuiOutlinedInput-root': {
                            borderRadius: '80px',
                            '& fieldset': {
                                borderColor: 'black',

                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                        },
                        '& .MuiInputBase-input': {
                            paddingLeft: '0.8rem',
                            "::placeholder": {
                                color: '#6A6F73'
                            }
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <IconButton edge="start" sx={{
                                color: '#000',
                                '&:hover': {
                                    backgroundColor: 'transparent'
                                }

                            }}
                                disabled={!searchTerm}
                            >
                                <SearchIcon sx={{ marginLeft: '0.7rem' }}
                                />
                            </IconButton>
                        ),
                    }}
                />

                <Box style={{ display: 'flex', gap: '1rem', margin: '0 0.5rem' }}>
                    <HoverMenu trigger={
                        <Typography color="inherit" sx={{
                            borderRadius: 0, textTransform: 'none', fontSize: '1rem',
                            '&:hover': {
                                color: '#5023C3',
                                fontWeight: '500',
                                backgroundColor: 'transparent',
                                cursor: 'pointer',
                            }

                        }}>Plans and pricing</Typography>
                    } menuItems={['My Courses', 'Udemy Business', 'Teach on Udemy']} />

                    <HoverMenu trigger={
                        <Typography color="inherit" sx={{
                            borderRadius: 0, textTransform: 'none', fontSize: '1rem',
                            cursor: 'pointer',
                            '&:hover': {
                                color: '#5023C3',
                                fontWeight: '500',
                                backgroundColor: 'transparent'
                            }

                        }}>Udemy Business</Typography>
                    } menuItems={['My Courses', 'Udemy Business', 'Teach on Udemy']} />

                    <HoverMenu trigger={
                        <Typography color="inherit" 
                        onClick={() => navigate('/instructor')}
                        sx={{
                            borderRadius: 0, textTransform: 'none', fontSize: '1rem',
                            cursor: 'pointer',
                            '&:hover': {
                                color: '#5023C3',
                                fontWeight: '500',
                                backgroundColor: 'transparent'
                            }

                        }}>Teach on Udemy</Typography>
                    } menuItems={['My Courses', 'Udemy Business', 'Teach on Udemy']} />
                </Box>

                {(userData) ?
                    <Box style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>


                        <HoverMenu trigger={<IconButton edge="end" sx={{
                            color: '#000',
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: 'initial',
                            }
                        }}>
                            <FavoriteBorderOutlined sx={{
                                height: '1.7rem', width: '1.7rem', margin: '0 0.2rem ',
                                '&:hover': {
                                    backgroundColor: 'initial',
                                    color: '#5023C3'
                                }
                            }} />
                        </IconButton>} menuItems={['Favourites', 'My Courses', 'Udemy Business', 'Teach on Udemy']} />

                        <HoverMenu trigger={<IconButton edge="end" sx={{
                            color: '#000',
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: 'initial',
                            }
                        }}>
                            <ShoppingCartOutlined sx={{
                                height: '1.7rem', width: '1.7rem', margin: '0 0.2rem ',
                                '&:hover': {
                                    backgroundColor: 'initial',
                                    color: '#5023C3'
                                }
                            }} />
                        </IconButton>} menuItems={['Favourites', 'My Courses', 'Udemy Business', 'Teach on Udemy']} />


                        <HoverMenu trigger={
                            <IconButton edge="end" sx={{
                                color: '#000',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: 'initial',
                                }
                            }}>
                                <NotificationsNoneOutlined sx={{
                                    height: '1.7rem', width: '1.7rem', margin: '0 0.2rem ',
                                    '&:hover': {
                                        backgroundColor: 'initial',
                                        color: '#5023C3'
                                    }
                                }} />
                            </IconButton>
                        } menuItems={['Favourites', 'My Courses', 'Udemy Business', 'Teach on Udemy']} />


                        <HoverMenu trigger={
                            <Avatar
                                sx={{
                                    width: "2.3rem",
                                    height: "2.3rem",
                                    // backgroundColor: 'black', 
                                    margin: '0 0.4rem',
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
                        } menuItems={[<ProfileComponent userData={userData} />, 'My Courses', 'Udemy Business', 'Teach on Udemy']} />


                    </Box>
                    :
                    <Box style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <IconButton edge="end" sx={{ color: '#000' }}>
                            <ShoppingCartOutlined sx={{ height: '1.7rem', width: '1.7rem', margin: '0 0.6rem ' }} />
                        </IconButton>
                        <Button
                            onClick={() => { navigate('/login') }}
                            variant="outlined" sx={{
                                borderRadius: 0, textTransform: 'none',
                                boxShadow: 'none',
                                backgroundColor: 'transparent',
                                borderColor: 'black',
                                color: 'black',
                                fontWeight: '600', fontSize: '1rem',
                                padding: '0.55rem 1.05rem',
                                '&:hover': {
                                    backgroundColor: '#E2E7EA',
                                    boxShadow: 'none',
                                    borderColor: 'initial',

                                },
                            }}>Log in</Button>
                        <Button
                            onClick={() => { navigate('/signup') }}

                            variant="contained" sx={{
                                borderRadius: 0, textTransform: 'none', boxShadow: 'none',
                                fontWeight: '600',
                                color: 'white',
                                borderColor: 'black',
                                backgroundColor: 'black',
                                fontSize: '1rem',
                                padding: '0.55rem 1.05rem',
                                '&:hover': {
                                    backgroundColor: '#3F4143',
                                    boxShadow: 'none',
                                },


                            }}>Sign up</Button>
                    </Box>
                }


            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
