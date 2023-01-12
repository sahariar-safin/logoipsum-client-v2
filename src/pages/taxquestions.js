import React from "react";
import Layout from "../Layout/Layout";
import TaxQuestions from "../components/ClientRegistry/TaxQuestions";

const taxquestions = () => {
  return (
    <div>
      <Layout pageTitle="registration">
        <TaxQuestions />
      </Layout>
    </div>
  );
};

export default taxquestions;
