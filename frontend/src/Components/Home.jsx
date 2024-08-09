import React , { useState , useEffect} from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel/Carousel'
import Courses from './Courses'
import Footer from './Footer'
import axios from 'axios';

const Home = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:${process.env.REACT_APP_API_URL}/api/getUser`, {
          withCredentials: true, 
        });
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();

  }, []);

  return (
    <>
    <Navbar userData={userData}/>
    <Carousel/>
    <Courses/>
    <Footer/>
      
    </>
  )
}

export default Home
