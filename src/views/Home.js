import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <div className='app-home'>            
            <Header />
            <Carousel />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;