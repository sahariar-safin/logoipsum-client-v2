import React from 'react';
import IRSForms from '../components/Refund/IRSForms/IRSForms';
import Layout from './../layout/Layout';

const irsForms = () => {
    return (
        <div>
            <Layout pageTitle="Refund Status">
                <IRSForms/>
            </Layout>
        </div>
    );
};

export default irsForms;