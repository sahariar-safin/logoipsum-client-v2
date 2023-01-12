import React from "react";
import TaxServiceCards from "../components/TaxServices/TaxServiceCards/TaxServiceCards";
import TaxServiceHeroSec from "../components/TaxServices/TaxServiceHeroSec/TaxServiceHeroSec";
import Layout from './../layout/Layout';

const taxServices = () => {
  return (
    <div>
      <Layout pageTitle="Tax Services">
        <TaxServiceHeroSec />
        <TaxServiceCards />
      </Layout>
    </div>
  );
};

export default taxServices;
