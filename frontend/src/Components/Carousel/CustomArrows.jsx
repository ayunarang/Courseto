import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// Custom Next Arrow Component
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <IconButton
            onClick={onClick}
            sx={{
                position: 'absolute',
                margin: '10px',
                top: '50%',
                right: '0%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                color: 'black',
                backgroundColor: 'white',
                '&:hover': {
                    backgroundColor: 'white',
                },
            }}
        >
            <ArrowForwardIos />
        </IconButton>
    );
};

// Custom Previous Arrow Component
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <IconButton
            onClick={onClick}
            sx={{
                position: 'absolute',
                top: '50%',
                margin: '10px',
                left: '0%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                color: 'black',
                backgroundColor: 'white',
                '&:hover': {
                    backgroundColor: 'white',
                },
            }}
        >
            <ArrowBackIos />
        </IconButton>
    );
};

export { NextArrow, PrevArrow };
