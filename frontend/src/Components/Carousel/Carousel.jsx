import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from './CustomArrows';

const carouselItems = [
    {
        image: 'https://img-b.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg',
        title: 'Skills that drive you forward',
        description: 'Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.'
    },
    {
        image: 'https://img-b.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg',
        title: 'Learning that gets you',
        description: 'Skills for your present (and your future). Get started with us.'
    },
];

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 'auto' }}>
            <Slider {...settings} >
                {carouselItems.map((item, index) => (
                    <Card key={index} sx={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={item.image}
                            alt={item.title}
                            
                        />
                        <CardContent
                            sx={{
                                position: 'absolute',
                                transform: 'translate(-50%, -50%)',
                                top: '50%',
                                marginLeft:'20rem',
                                backgroundColor: 'white',
                                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
                                color: 'black',
                                maxWidth:'30rem',
                            }}
                        >
                            <Typography sx={{ fontSize: '2.5rem', fontFamily: "EB Garamond", fontWeight: '700' , lineHeight:'2.5rem'}}>
                                {item.title}
                            </Typography>
                            <Typography sx={{
                                fontSize: '1rem', marginTop:'0.8rem'
                            }}>
                                {item.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Slider>
        </Box>
    );
};

export default Carousel;
