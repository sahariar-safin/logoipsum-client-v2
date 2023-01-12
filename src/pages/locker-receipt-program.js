import React from 'react';
import TrueReceiptCard from '../components/TrueReceipt/TrueReceiptCard/TrueReceiptCard';
import TrueReceiptProgram from '../components/TrueReceipt/TrueReceiptProgram/TrueReceiptProgram';
import Layout from './../layout/Layout';

const lockerReceiptProgram = () => {
    return (
        <div>
            <Layout pageTitle="True Receipt Program">
                <TrueReceiptProgram />
                <TrueReceiptCard/>
            </Layout>
        </div>
    );
};

export default lockerReceiptProgram;