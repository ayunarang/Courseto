import React, { useState } from 'react'
import { Box, Button, Container, Paper, TextField, Typography, IconButton, InputAdornment, Menu, MenuItem, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HoverInfo from './HoverInfo';
import zIndex from '@mui/material/styles/zIndex';

const CategoryItems = [
  {
    name: 'Web Development'
  },
  {
    name: 'Leadership'
  }, {
    name: 'Data Science'
  }, {
    name: 'Communication'
  }, {
    name: 'IT Certificates'
  }, {
    name: 'Business Analytics and Intelligence'
  },
];

const subCategoryItems = [
  {
    name: 'Web Development',
    learners: '13.3M'
  },
  {
    name: 'Javascript', learners: '16.6M'

  }, {
    name: 'React JS', learners: '7M'

  }, {
    name: 'Angular', learners: '8M'

  }, {
    name: 'Java', learners: '12.3M'

  }, {
    name: 'Android Development', learners: '11.5M'

  }, {
    name: 'iOS Development', learners: '10M'

  }, {
    name: 'CSS', learners: '9.3M'

  },
]

const subCategoryListings = [
  {
    name: 'The Complete 2024 Web Development Bootcamp',
    by: 'Dr. Angela Yu',
    img: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg',
    price: '449',
    averageRating: '4.7',
    totalRatings: '61,500',
    lastUpdated: 'June 2024',
    totalHours: '61.5',
    allLevels: 'true',
    subtitles: 'true',
    description: 'Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps',
    features: [
      'Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.',
      'Learn the latest technologies, including Javascript, React, Node and even Web3 development.',
      'After the course you will be able to build ANY website you want.',
    ]

  },
  {
    name: 'The Complete 2024 Web Development Bootcamp',
    by: 'Dr. Angela Yu',
    img: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg',
    price: '449'
  }, {
    name: 'The Complete 2024 Web Development Bootcamp',
    by: 'Dr. Angela Yu',
    img: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg',
    price: '449'
  }, {
    name: 'The Complete 2024 Web Development Bootcamp',
    by: 'Dr. Angela Yu',
    img: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg',
    price: '449'
  }, {
    name: 'The Complete 2024 Web Development Bootcamp',
    by: 'Dr. Angela Yu',
    img: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg',
    price: '449'
  }, {
    name: 'The Complete 2024 Web Development Bootcamp',
    by: 'Dr. Angela Yu',
    img: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg',
    price: '449'
  }, {
    name: 'The Complete 2024 Web Development Bootcamp',
    by: 'Dr. Angela Yu',
    img: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg',
    price: '449'
  }, {
    name: 'The Complete 2024 Web Development Bootcamp',
    by: 'Dr. Angela Yu',
    img: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg',
    price: '449'
  },
]

const pricingOptions = [
  {
    name: 'Personal Plan',
    for: 'For you',
    people: 'Individual',
    pricing: 'Starting at ₹850 per month',
    billingDetails: 'Billed monthly or annually. Cancel anytime.',
    features: [
      'Access to 11,000+ top courses',
      'Certification prep',
      'Goal-focused recommendations',
      'AI-powered coding exercises'
    ]
  },
  {
    name: 'Team Plan',
    for: 'For your team',
    people: '2 to 20 people',
    pricing: '₹1,167 a month per user',
    billingDetails: 'Billed annually. Cancel anytime.',
    features: [
      'Access to 11,000+ top courses',
      'Certification prep',
      'Goal-focused recommendations',
      'AI-powered coding exercises',
      'Analytics and adoption reports',
    ]

  }, {
    name: 'Enterprise Plan',
    for: 'For your whole organization',
    people: 'More than 20 people',
    pricing: '₹2,500 a month per user',
    billingDetails: 'Billed annually.',
    features: [
      'Access to 25,000+ top courses',
      'Certification prep',
      'Goal-focused recommendations',
      'AI-powered coding exercises',
      'Advanced analytics and insights',
      'Dedicated customer success team',
      'International course collection featuring 15 languages',
      'Customizable content',
      'Hands-on tech training with add-on',
      'Strategic implementation services with add-on',
    ]

  },
]


const Courses = () => {
  const [activeCategory, setactiveCategory] = useState(null);
  const [activeSubCategory, setactiveSubCategory] = useState(null);
  const [hoveredListing, setHoveredListing] = useState(null);

  const handleMouseEnter = (listing) => {
    setHoveredListing(listing);
  };

  const handleMouseLeave = () => {
    setHoveredListing(null);
  };


  return (
    <>
      <Container maxWidth={false} sx={{ padding: '4rem 0 !important', margin: '0' }}>
        <Typography sx={{ fontSize: '2.5rem', fontFamily: "EB Garamond", fontWeight: '700', lineHeight: '2.5rem', padding: '0 2rem' }}>
          All the skills you need in one place
        </Typography>
        <Typography sx={{
          fontSize: '1.2rem', marginTop: '0.8rem', color: '#6A6F73', padding: '0 2rem'
        }}>
          From critical skills to technical topics, Udemy supports your professional development.
        </Typography>

        <Box style={{ display: 'flex', gap: '1rem', padding: '3rem 2rem 0 2rem', borderBottom: '1px solid #6A6F73' }}>

          {(CategoryItems).map((category, index) => {
            return (
              <Button color="inherit"
                disableRipple
                onClick={() => {
                  setactiveCategory(category.name);
                }}
                sx={{
                  borderRadius: 0, textTransform: 'none', fontSize: '1.08rem', fontWeight: '700',
                  color: activeCategory === category.name ? 'black' : '#6A6F73',
                  borderBottom: activeCategory === category.name ? '2px solid black' : 'transparent',
                  backgroundColor: 'transparent',
                  transition: activeCategory === category.name ? 'none' : 'none',

                  '&:hover': {
                    color: 'black',
                    backgroundColor: 'transparent',
                  },
                  '&:active': {
                    backgroundColor: 'transparent',
                    transition: 'none'
                  },
                }}>{category.name}</Button>
            )
          })}


        </Box >

        <Box sx={{ padding: '1.7rem 1rem', backgroundColor: '#F7F9FA' }}>
          <Box
            sx={{
              paddingTop: '0.75rem',
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              overflowX: 'auto',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
              '-ms-overflow-style': 'none',
            }}
          >
            {subCategoryItems.map((subcategory, index) => (
              <Button
                disableRipple
                key={index}
                color="inherit"
                onClick={() => setactiveSubCategory(subcategory.name)}
                sx={{
                  padding: '0.8rem 1.5rem',
                  margin: '0',
                  borderRadius: '50px',
                  textTransform: 'none',
                  color: activeSubCategory === subcategory.name ? 'white' : '#2D2F31',
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: 'fit-content',
                  backgroundColor: activeSubCategory === subcategory.name ? '#2D2F31' : '#E4E8EB',
                  transition: 'none',
                  '&:hover': {
                    color: activeSubCategory === subcategory.name ? 'white' : 'black',
                    backgroundColor: activeSubCategory === subcategory.name ? '#2D2F31' : '#F1F1F1'
                  },

                  '&. Mui-selected': {
                    color: 'black',

                  }
                }}
              >
                <Box sx={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  alignSelf: "start",

                }}>{subcategory.name}</Box>
                <Box sx={{
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  alignSelf: "start",
                }}>{subcategory.learners} + learners</Box>
              </Button>
            ))}
          </Box>

          <Box sx={{
            padding: '1.5rem 0', display: 'flex', gap: '1.3rem', overflowX: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            '-ms-overflow-style': 'none',
          }}>
            {subCategoryListings.map((listing, index) => {
              return (
                <Box sx={{
                  position: 'relative',
                  display:'flex',
                  flexDirection:'row',
                  height:'auto',

                }}>
                  <Box key={index}
                    sx={{
                      borderRadius: '10px',
                      border: '1px solid #CCD2D6',
                      height:'auto',

                    }}
                    onMouseEnter={() => handleMouseEnter(listing)}
                    // onMouseLeave={() => handleMouseLeave()}


                  >

                    <Box sx={{ height: '12.5rem', width: '22rem' }}>
                      <img src={listing.img} style={{ height: '100%', width: '100%', borderRadius: '10px 10px 0 0' }}></img>

                    </Box>
                    <Box sx={{ padding: '0.3rem 1.3rem 1rem 1.3rem ' }}>
                      <Typography sx={{
                        fontSize: '0.95rem', fontWeight: '700', margin: '0.35rem 0', color: 'black'
                      }}>{listing.name}</Typography>

                      <Typography sx={{
                        fontSize: '0.8rem', color: '#6A6F73'
                      }}>
                        {listing.by}
                      </Typography>

                      <Typography sx={{
                        fontSize: '1rem', fontWeight: '700',
                        fontSize: '1.1rem', margin: '0.35rem 0', color: 'black'
                      }}>Rs.{listing.price}</Typography></Box>



                  </Box>
                  {/* {hoveredListing === listing && <HoverInfo style={{
                    top:'auto',
                    left: '100%',
                    position: 'absolute',
                    zIndex:'999',   
                    height:'auto'  

                                }} listingInfo={listing} />} */}
                </Box>
              )
            })}
          </Box>

          <Button sx={{ textTransform: 'none', fontSize: '0.95rem', fontWeight: '700', padding: '0.5rem 1rem', border: '1px solid black', color: 'black', margin: '1rem 0', borderRadius: '0' }}>Show All Web Development courses</Button>
        </Box>

        <Box sx={{ padding: '2.8rem 2rem', backgroundColor: 'white' }}>
          <Typography sx={{
            fontSize: '1.2rem', margin: '1.2rem 0', color: '#6A6F73', textAlign: 'center'
          }}>
            Trusted by over 15,000 companies and millions of learners around the world
          </Typography>

          <Box sx={{
            padding: '1rem 0',
            display: 'flex',
            flexDirection: 'row',

            alignItems: 'center', justifyContent: 'space-evenly',
            width: '100%'
          }}>
            <img src={'https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals'}></img>

            <img src={'https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals'}></img>

            <img src={'https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals'}></img>

            <img src={'https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals'}></img>

            <img src={'https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals'}></img>

            <img src={'https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals'}></img>

          </Box>
        </Box>

        <Box sx={{ padding: '3.5rem 2rem 2rem 2rem', backgroundColor: '#F7F9FA' }}>
          <Typography sx={{ fontSize: '2.5rem', fontFamily: "EB Garamond", fontWeight: '700', lineHeight: '2.5rem' }}>
            Accelerate growth — for you or your organization
          </Typography>
          <Typography sx={{
            fontSize: '1.2rem', marginTop: '0.8rem', color: '#6A6F73'
          }}>
            Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
          </Typography>
          <Box
            sx={{
              padding: '2rem 0',
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',

            }}
          >
            {pricingOptions.map((pricingItems, index) => {

              return (<Box sx={{ borderRadius: '10px', border: '1px solid #CCD2D6', flex: 1, padding: '0', backgroundColor: 'white' }}>
                <Box>
                  <Box sx={{ backgroundColor: '#F7F9FA', padding: '0.65rem 1.5rem' }}>

                    <Typography sx={{
                      fontSize: '1.5rem', fontWeight: '700', color: 'black', fontFamily: "EB Garamond",
                    }}>{pricingItems.name}</Typography>

                    <Typography sx={{
                      fontSize: '0.8rem', color: '#6A6F73', margin: '0'
                    }}>
                      {pricingItems.for}
                    </Typography>

                    <Typography sx={{
                      fontSize: '1rem', fontWeight: '500',
                      margin: '0.5rem 0', color: 'black'
                    }}>{pricingItems.people}</Typography>

                  </Box >
                  <Box sx={{ padding: '1.2rem 1.5rem' }}>
                    <Typography sx={{
                      fontSize: '1.1rem', fontWeight: '600', color: 'black'
                    }}>
                      {pricingItems.pricing}
                    </Typography>

                    <Typography sx={{
                      fontSize: '0.8rem', color: '#6A6F73'
                    }}>
                      {pricingItems.billingDetails}
                    </Typography>

                    <Button
                      disableRipple
                      sx={{
                        margin: '1.25rem 0', width: '100%', textTransform: 'none', fontSize: '1.1rem', fontWeight: '700', backgroundColor: '#2D2F31', color: 'white',
                        borderRadius: '0',
                        padding: '0.6rem 0',
                        '&:hover': {
                          backgroundColor: '#3F4143',
                        },
                      }}

                    >Start Subscription</Button>
                    <List>
                      {pricingItems.features.map((feature, index) => (
                        <ListItem key={index} sx={{ margin: '0.35rem 0', padding: '0', alignItems: 'baseline' }}>
                          <ListItemIcon sx={{ minWidth: 'auto', marginRight: '0.8rem', alignSelf: 'baseline' }}>
                            <CheckCircleOutlineIcon sx={{ fontSize: '0.85rem', color: '#4CB7A5', paddingTop: '3px' }} />
                          </ListItemIcon>
                          <ListItemText primary={feature}
                            sx={{ margin: '0' }}
                            primaryTypographyProps={{
                              fontSize: '0.875rem',
                              fontWeight: '500',
                              margin: '0'
                            }} />
                        </ListItem>
                      ))}
                    </List>


                  </Box>
                </Box>


              </Box>)

            })}
            {/* write here mapping        /////////////////////////////////  */}
          </Box>

        </Box>


      </Container>

    </>
  )
}

export default Courses
