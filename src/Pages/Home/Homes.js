import React from 'react';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
// import Portfolio from '../../components/Portfolio/Portfolio';
import Skills from '../../components/Skills/Skills';
import Home from '../../components/Home/Home';
import Projects from '../Projects/Projects';

const Homes = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Homes;