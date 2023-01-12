import Business from "../components/Home/Business/Business";
import Connect from "../components/Home/Connect/Connect";
import CustomerFeedback from "../components/Home/CustomerFeedback/CustomerFeedback";
import EveryDollar from "../components/Home/EveryDollar/EveryDollar";
import GetAhead from "../components/Home/GetAhead/GetAhead";
import HeroSec from "../components/Home/HeroSec/HeroSec";
import Layout from './../layout/Layout';


export default function Home() {

  return (

      <Layout pageTitle="Logoipsum" >
      <HeroSec />
      <GetAhead />
      <Connect />
      <CustomerFeedback />
      <Business />
      <EveryDollar />
      </Layout>

  );
}
