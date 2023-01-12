import React from 'react';
import TaxPartnerFAQ from '../components/TaxPartnerFAQ/TaxPartnerFAQ';
import Layout from './../layout/Layout';

const taxPartnerProgramFaq = () => {
    return (
        <div>
            <Layout pageTitle="Tax Partner Program FAQ" >
                <TaxPartnerFAQ/>
            </Layout>
        </div>
    );
};

export default taxPartnerProgramFaq;