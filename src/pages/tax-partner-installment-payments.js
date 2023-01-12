import React from 'react';
import TaxPartnerInstallment from '../components/TaxPartnerInstallment/TaxPartnerInstallment';
import Layout from './../layout/Layout';

const taxPartnerInstallmentPayments = () => {
    return (
        <div>
            <Layout pageTitle="Tax Partner Program FAQ" >
                <TaxPartnerInstallment/>
            </Layout>
        </div>
    );
};

export default taxPartnerInstallmentPayments;