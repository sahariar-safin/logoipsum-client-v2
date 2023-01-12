import React from 'react';
import LocationDetails from '../components/Locations/LocationDetails';
import LocationsHero from '../components/Locations/LocationsHero';
import Layout from './../layout/Layout';

const locations = () => {
    return (
        <div>
             <Layout pageTitle="Locations">
                <LocationsHero />
                <LocationDetails />
             </Layout>
        </div>
    );
};

export default locations;