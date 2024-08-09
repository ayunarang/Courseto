import React, { Component } from 'react'
import { Box, Button, Container,  Typography, List, ListItem, ListItemText} from '@mui/material'
const Footer = () => {
    return (
        <Container maxWidth={false} sx={{ backgroundColor: '#2D2F31', color: '#F9F9F9', margin: '0' }}>
            <Box sx={{
                padding: '1.5rem 0 ', display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center',
                borderBottom: '1px solid #414345'
            }}>
                <Typography sx={{ fontSize: '1.1rem', fontWeight: '600', padding:'0' , margin:'0', wordWrap:'break-word'}}>
                    Top companies choose <span style={{ color: '#C0C4FC' }}>Udemy Business</span> to build in-demand career skills.

                </Typography>
                <img src={'https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg'}></img>
                <img src={'https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg'}></img>
                <img src={'https://s.udemycdn.com/partner-logos/v4/box-light.svg'}></img>
                <img src={'https://s.udemycdn.com/partner-logos/v4/netapp-light.svg'}></img>
                <img src={'https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg'}></img>


            </Box>

            <Box sx={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10rem' }}>
        <List sx={{ padding: 0 }}>
          {['Udemy for Business', 'Teach on Udemy', 'Get the app', 'About us', 'Contact us'].map((item, index) => (
            <ListItem key={index} sx={{ padding: '0', alignItems: 'flex-start' }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                }}
              />
            </ListItem>
          ))}
        </List>

        <List sx={{ padding: 0 }}>
          {['Careers', 'Blog', 'Help and Support', 'Affiliate', 'Investors'].map((item, index) => (
            <ListItem key={index} sx={{ padding: ' 0', alignItems: 'flex-start' }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                }}
              />
            </ListItem>
          ))}
        </List>

        <List sx={{ padding: 0 }}>
          {['Terms', 'Privacy policy', 'Sitemap', 'Accessibility statement'].map((item, index) => (
            <ListItem key={index} sx={{ padding: ' 0', alignItems: 'flex-start' }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Button sx={{ border: '1px solid white', padding: '0.5rem 1.2rem', fontSize: '0.875rem' , alignSelf:'flex-start', color:'white', borderRadius:'0'}}>English</Button>
    </Box>

    <Box sx={{ padding: '2.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
        <img src={'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg'} style={{ width: '6rem', height: 'auto' , cursor:'pointer'}}></img>
        <Typography sx={{ fontSize: '0.75rem' , fontWeight:'400'}}>© 2024 Udemy, Inc.</Typography>

    </Box>

        </Container>
    )
}

export default Footer
