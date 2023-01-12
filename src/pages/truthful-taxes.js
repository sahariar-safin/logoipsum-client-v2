import React from 'react';
import TruthfulTaxesForm from '../components/TruthfulTaxes/TruthfulTaxesForm/TruthfulTaxesForm';
import TruthfulTaxesHero from '../components/TruthfulTaxes/TruthfulTaxesHero/TruthfulTaxesHero';
import Layout from './../layout/Layout';

const truthfulTaxes = () => {
    return (
        <div>
            <Layout pageTitle="We are Truthful Taxes">
                <TruthfulTaxesHero />
                <TruthfulTaxesForm/>
            </Layout>
        </div>
    );
};

export default truthfulTaxes;