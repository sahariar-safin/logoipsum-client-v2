import React from 'react';
import RefundStatus from '../components/Refund/RefundStatus/RefundStatus';
import Layout from './../layout/Layout';
import AuthGuard from './../ui-component/AuthGuard';

const refundStatus = () => {
    return (
        <AuthGuard>
            <Layout pageTitle="Refund Status">
                <RefundStatus />
            </Layout>
        </AuthGuard>
    );
};

export default refundStatus;