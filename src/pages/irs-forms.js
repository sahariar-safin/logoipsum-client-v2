import React from 'react';
import IRSForms from '../components/Refund/IRSForms/IRSForms';
import Layout from './../layout/Layout';
import AuthGuard from './../ui-component/AuthGuard';

const irsForms = () => {
    return (
        <AuthGuard>
            <Layout pageTitle="Refund Status">
                <IRSForms />
            </Layout>
        </AuthGuard>
    );
};

export default irsForms;