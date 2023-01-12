import { useState } from "react";
import { useForm } from "react-hook-form";
import ClientRegistry from "../components/ClientRegistry/ClientRegistry";
import BankDetails from "./../components/ClientRegistry/BankDetails";
import TaxQuestions from "./../components/ClientRegistry/TaxQuestions";
import Footer from './../components/Shared/Footer/Footer';
import Navbar from './../components/Shared/Navbar/Navbar';
import AuthGuard from './../ui-component/AuthGuard';

const Clientregistry = () => {
  const [formNumber, setFormNumber] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleRegistrationFormSubmit = async (body) => {
    try {
      console.log(body, "asdfsdf");
    } catch (error) {}
  };
  return (
    <AuthGuard pageTitle="Registration">
      <Navbar/>
      {formNumber === 1 && (
        <ClientRegistry
          setFormNumber={setFormNumber}
          register={register}
          handleSubmit={handleSubmit}
          handleRegistrationFormSubmit={handleRegistrationFormSubmit}
        />
      )}
      {formNumber === 2 && (
        <TaxQuestions
          setFormNumber={setFormNumber}
          register={register}
          handleSubmit={handleSubmit}
          handleRegistrationFormSubmit={handleRegistrationFormSubmit}
        />
      )}
      {formNumber === 3 && (
        <BankDetails
          setFormNumber={setFormNumber}
          register={register}
          handleSubmit={handleSubmit}
          handleRegistrationFormSubmit={handleRegistrationFormSubmit}
        />
      )}
      <Footer/>
    </AuthGuard>
  );
};

export default Clientregistry;
