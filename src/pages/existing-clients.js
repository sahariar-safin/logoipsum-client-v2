import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BankInfo from "../components/ExistingClients/BankInfo";
import ExistingClient from "../components/ExistingClients/ExistingClient";
import Irs from "../components/ExistingClients/Irs";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
import AuthGuard from "../ui-component/AuthGuard";

const ExistingClients = () => {
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
    <AuthGuard pageTitle="Existing Clients">
      <Navbar/>
      {/* <ExistingClients /> */}
      {formNumber === 1 && (
        <ExistingClient
          setFormNumber={setFormNumber}
          register={register}
          handleSubmit={handleSubmit}
          handleRegistrationFormSubmit={handleRegistrationFormSubmit}
        />
      )}
      {formNumber === 2 && (
        <Irs
          setFormNumber={setFormNumber}
          register={register}
          handleSubmit={handleSubmit}
          handleRegistrationFormSubmit={handleRegistrationFormSubmit}
        />
      )}
      {formNumber === 3 && (
        <BankInfo
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

export default ExistingClients;
