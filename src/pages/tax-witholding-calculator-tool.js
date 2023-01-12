import React from 'react';
import TaxCalculator from '../components/TaxCalculator/TaxCalculator';
import Layout from './../layout/Layout';

const taxWitholdingCalculatorTool = () => {
    return (
        <div>
            <Layout pageTitle="Tax Witholding Calculator" >
                <TaxCalculator/>
            </Layout>
        </div>
    );
};

export default taxWitholdingCalculatorTool;