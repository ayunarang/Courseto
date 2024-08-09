import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, ClickAwayListener, Paper } from '@mui/material';

const HoverMenu = ({ trigger, menuItems }) => {
    const [open, setOpen] = useState(false);
    const [hoveringMenu, setHoveringMenu] = useState(false);
    const [hoveringTrigger, setHoveringTrigger] = useState(false);

    const handleMouseEnterTrigger = () => {
        setHoveringTrigger(true);
        setOpen(true);
    };

    const handleMouseLeaveTrigger = () => {
        setHoveringTrigger(false);
        if (!hoveringMenu) {
            setOpen(false);
        }
    };

    const handleMouseEnterMenu = () => {
        setHoveringMenu(true);
        setOpen(true);
    };

    const handleMouseLeaveMenu = () => {
        setHoveringMenu(false);
        if (!hoveringTrigger) {
            setOpen(false);
        }
    };

    const handleClickAway = () => {
        if (!hoveringMenu && !hoveringTrigger) {
            setOpen(false);
        }
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box style={{ position: 'relative' }}>
                <Box
                    onMouseEnter={handleMouseEnterTrigger}
                    onMouseLeave={handleMouseLeaveTrigger}
                >
                    {trigger}
                </Box>
                {open && (

                    <Paper
                        sx={{
                            position: 'absolute', top: '100%', right: '-10%', padding: '0', borderRadius: 0, margin: 0,
                            backgroundColor: 'transparent', boxShadow:'none',

                        }}
                        onMouseEnter={handleMouseEnterMenu}
                        onMouseLeave={handleMouseLeaveMenu}
                    >
                        <List sx={{ minWidth: '15rem' , backgroundColor: 'white', border: '1px solid #D3D9DD', marginTop: '1.5rem', zIndex: 1000 }}
                         
                        >
                            {menuItems.map((item, index) => (
                                <ListItem key={index} sx={{ margin: '0' }}>
                                    {typeof item === 'string' ? (
                                      <ListItemText primary={item} 
                                      sx={{ margin: '0' }}
                                          primaryTypographyProps={{
                                              fontSize: '0.875rem',
                                              display:'flex',
                                              fontWeight: '500',
                                              margin: '0',
                                              alignSelf: 'flex-start',
                                            //   wordWrap: 'break-word',
                                          }} />   
                                    ): (
                                        item
                                    )}
                                   
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                )}
            </Box>
        </ClickAwayListener>
    );
};

export default HoverMenu;
