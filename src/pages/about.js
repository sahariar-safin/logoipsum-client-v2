import React from 'react';
import AboutHero from '../components/AboutUs/AboutHero';
import Award from '../components/AboutUs/Award';
import WhyUs from '../components/AboutUs/WhyUs';
import Layout from './../layout/Layout';


const About = () => {
    return (
        <div>
            <Layout pageTitle="About Us">
            <AboutHero />
            <Award />
            <WhyUs />
            </Layout>
        </div>
    );
};

export default About;