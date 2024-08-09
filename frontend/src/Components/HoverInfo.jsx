import React from 'react'


import { Box, Button, Container, Paper, TextField, Typography, IconButton, InputAdornment, Menu, MenuItem, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

const HoverInfo = ({ listingInfo }) => {
    return (
        <>
            {/* name: 'The Complete 2024 Web Development Bootcamp',
    by: 'Dr. Angela Yu',
    img: 'https://vision-inst.com/wp-content/uploads/2022/10/Teachable-Thumbnails-1.png',
    price: '449',
    averageRating:'4.7',
    totalRatings:'61,500',
    lastUpdated:'June 2024',
    totalHours:'61.5',
    allLevels:'true',
    subtitles:'true',
    description:'Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps',
    features:[
      'Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.',
      'Learn the latest technologies, including Javascript, React, Node and even Web3 development.',
      'After the course you will be able to build ANY website you want.',
    ] */}

            <Container maxWidth={false} sx={{ padding: '1.5rem', minHeight :'20rem', width: '20rem', backgroundColor: 'white' , position:'absolute', zIndex:'9999', left:'100%', marginLeft:'0.75rem', top:'auto'}}>
                <Typography sx={{
                    fontSize: '0.95rem', fontWeight: '700', margin: '0.3rem 0', color: 'black'
                }}>{listingInfo.name}</Typography>

                <Typography sx={{
                    fontSize: '0.8rem', color: '#1E6055',margin: '0.3rem 0', 
                }}>
                    Updated <span style={{fontWeight:'600'}}>{listingInfo.lastUpdated}</span> 
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap:'1rem',margin: '0.3rem 0', 
                }}>

                    <Typography sx={{
                        fontSize: '0.8rem', fontWeight: '300', margin: '0.3rem 0', color: 'black'
                    }}>{listingInfo.totalHours} Total Hours</Typography>


                    <Typography sx={{
                        fontSize: '0.8rem', fontWeight: '300', margin: '0.3rem 0', color: 'black'
                    }}>{(listingInfo.allLevels) ? 'All Levels' : ''}</Typography>

                    <Typography sx={{
                        fontSize: '0.8rem', fontWeight: '300', margin: '0.3rem 0', color: 'black'
                    }}>{listingInfo.subtitles ? 'Subtitles' : ''}</Typography>
                </Box>

                <Typography sx={{
                    fontSize: '0.95rem', color: 'black',margin: '0.3rem 0', 
                }}>{listingInfo.desription}</Typography>

                <List>
                    {listingInfo?.features?.map((feature, index) => (
                        <ListItem key={index} sx={{ margin: '0.3rem 0', padding: '0', alignItems: 'center' }}>
                            <ListItemIcon sx={{ minWidth: 'auto', marginRight: '0.8rem', alignSelf: 'baseline' }}>
                                <CheckIcon sx={{ fontSize: '1rem', color: 'black'}} />
                            </ListItemIcon>
                            <ListItemText primary={feature}
                                sx={{ margin: '0' }}
                                primaryTypographyProps={{
                                    fontSize: '0.875rem',
                                    fontWeight: '500',
                                    margin: '0',
                                    alignSelf:'flex-start'
                                }} />
                        </ListItem>
                    ))}
                </List>

            </Container>
        </>
    )
}

export default HoverInfo
