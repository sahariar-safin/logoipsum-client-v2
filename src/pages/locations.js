import React, { lazy } from 'react';
// import LocationDetails from '../components/Locations/LocationDetails';
import LocationsHero from '../components/Locations/LocationsHero';
import Layout from './../layout/Layout';

const LocationDetails = lazy(() => import('../components/Locations/LocationDetails'));

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