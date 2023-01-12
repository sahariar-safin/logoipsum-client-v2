import React from "react";
import Layout from "../Layout/Layout";
import BankDetails from "../components/ClientRegistry/BankDetails";

const bankdetails = () => {
  return (
    <div>
      <Layout pageTitle="registration">
        <BankDetails />
      </Layout>
    </div>
  );
};

export default bankdetails;
