import React from 'react';
import RefundOptions from '../components/Refund/RefundOptions/RefundOptions';
import Layout from './../layout/Layout';

const refundOptions = () => {
    return (
        <div>
            <Layout pageTitle="Refund Options">
                <RefundOptions/>
            </Layout>
        </div>
    );
};

export default refundOptions;