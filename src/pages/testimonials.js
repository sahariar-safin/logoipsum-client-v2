import React from 'react';
import CustomerFeedback from '../components/Home/CustomerFeedback/CustomerFeedback';
import Layout from './../layout/Layout';

const testimonials = () => {
    return (
        <div>
            <Layout pageTitle="Testimonials">
                <CustomerFeedback />
            </Layout>
        </div>
    );
};

export default testimonials;