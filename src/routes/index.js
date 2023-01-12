import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// project imports
import Loadable from '../ui-component/Loadable';

// route imports
const LandingPage = Loadable(lazy(() => import("../pages/index")));
const About = Loadable(lazy(() => import("../pages/about")));
const ClientRegistry = Loadable(lazy(() => import("../pages/clientregistry")));
const ContactUs = Loadable(lazy(() => import("../pages/contact-us")));
const ExistingClients = Loadable(lazy(() => import("../pages/existing-clients")));
const FAQ = Loadable(lazy(() => import("../pages/faq")));
const ForgotPass = Loadable(lazy(() => import("../pages/forgotPass")));
const IrsForms = Loadable(lazy(() => import("../pages/irs-forms")));
const Locations = Loadable(lazy(() => import("../pages/locations")));
const LockerReceiptProgram = Loadable(lazy(() => import("../pages/locker-receipt-program")));
const Login = Loadable(lazy(() => import("../pages/login")));
const PrivacyPolicy = Loadable(lazy(() => import("../pages/privacy-policy")));
const RefundOptions = Loadable(lazy(() => import("../pages/refund-options")));
const RefundStatus = Loadable(lazy(() => import("../pages/refund-status")));
const SignUp = Loadable(lazy(() => import("../pages/signup")));
const TaxPartnerClassRealTime = Loadable(lazy(() => import("../pages/tax-partner-class-real-time")));
const TaxPartnerInstallmentPayments = Loadable(lazy(() => import("../pages/tax-partner-installment-payments")));
const TaxPartnerProgramFaq = Loadable(lazy(() => import("../pages/tax-partner-program-faq")));
const TaxPartner = Loadable(lazy(() => import("../pages/tax-partner")));
const TaxPayerDisclosure = Loadable(lazy(() => import("../pages/tax-payer-disclosure")));
const TaxServices = Loadable(lazy(() => import("../pages/tax-services")));
const TaxWitholdingCalculatorTool = Loadable(lazy(() => import("../pages/tax-witholding-calculator-tool")));
const Testimonials = Loadable(lazy(() => import("../pages/testimonials")));
const ThankYou = Loadable(lazy(() => import("../pages/thank-you")));
const TruthfulTaxes = Loadable(lazy(() => import("../pages/truthful-taxes")));


// ===========================|| ROUTING RENDER ||=========================== //

const Routes = () => {
    return useRoutes([
        {
        path: "/",
        element: <LandingPage/>
        },
        {
            path: "/about",
        element: <About/>
        },
        {
            path: "/clientregistry",
        element: <ClientRegistry/>
        },
        {
            path: "/contact-us",
        element: <ContactUs/>
        },
        {
            path: "/existing-clients",
        element: <ExistingClients/>
        },
        {
            path: "/faq",
        element: <FAQ/>
        },
        {
            path: "/forgotPass",
        element: <ForgotPass/>
        },
        {
            path: "/irs-forms",
        element: <IrsForms/>
        },
        {
            path: "/locations",
        element: <Locations/>
        },
        {
            path: "/locker-receipt-program",
        element: <LockerReceiptProgram/>
        },
        {
            path: "/login",
        element: <Login/>
        },
        {
            path: "/privacy-policy",
        element: <PrivacyPolicy/>
        },
        {
            path: "/refund-options",
        element: <RefundOptions/>
        },
        {
            path: "/refund-status",
        element: <RefundStatus/>
        },
        {
            path: "/signup",
        element: <SignUp/>
        },
        {
            path: "/tax-partner-class-real-time",
        element: <TaxPartnerClassRealTime/>
        },
        {
            path: "/tax-partner-installment-payments",
        element: <TaxPartnerInstallmentPayments/>
        },
        {
            path: "/tax-partner-program-faq",
        element: <TaxPartnerProgramFaq/>
        },
        {
            path: "/tax-partner",
        element: <TaxPartner/>
        },
        {
            path: "/tax-payer-disclosure",
        element: <TaxPayerDisclosure/>
        },
        {
            path: "/tax-services",
        element: <TaxServices/>
        },
        {
            path: "/tax-witholding-calculator-tool",
        element: <TaxWitholdingCalculatorTool/>
        },
        {
            path: "/testimonials",
        element: <Testimonials/>
        },
        {
            path: "/thank-you",
        element: <ThankYou/>
        },
        {
            path: "/truthful-taxes",
        element: <TruthfulTaxes/>
        },

    ])
};

export default Routes;