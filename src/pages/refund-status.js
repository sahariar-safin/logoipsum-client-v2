import React from 'react';
import RefundStatus from '../components/Refund/RefundStatus/RefundStatus';
import Layout from './../layout/Layout';

const refundStatus = () => {
    return (
        <div>
            <Layout pageTitle="Refund Status">
                <RefundStatus/>
            </Layout>
        </div>
    );
};

export default refundStatus;