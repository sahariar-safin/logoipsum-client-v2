import React from 'react';
import TaxPayerDisclosure from '../components/TaxPayerDisclosure/TaxPayerDisclosure';
import Layout from './../layout/Layout';


const taxPayerDisclosure = () => {
    return (
        <div>
            <Layout>
                <TaxPayerDisclosure/>
            </Layout>
        </div>
    );
};

export default taxPayerDisclosure;