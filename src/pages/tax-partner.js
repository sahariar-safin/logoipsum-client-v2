import React from 'react';
import PartnerReview from '../components/TaxPartnerProgram/PartnerReview/PartnerReview';
import PartnersForm from '../components/TaxPartnerProgram/PartnersForm/PartnersForm';
import TaxPartner from '../components/TaxPartnerProgram/TaxPartner/TaxPartner';
import TaxPartnersCard from '../components/TaxPartnerProgram/TaxPartnerCard/TaxPartnersCard';
import Layout from './../layout/Layout';

const Taxpartner = () => {
    return (
        <Layout pageTitle="Tax Partner">
        <div>
            <TaxPartner />
            <TaxPartnersCard />
            <PartnerReview />
            <PartnersForm />
        </div>
        </Layout>
    );
};

export default Taxpartner;